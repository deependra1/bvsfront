import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useSnackbar } from 'notistack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
// import useSWR from 'swr';
import axiosService from 'helpers/axios';
import { useEffect, useState } from 'react';
import TreatmentForm from './TreatmentForm';

const PatientDetail = () => {
  const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const [patientData, setPatientData] = useState([]);
  const [patientError, setPatientError] = useState(null);
  const [patientLoading, setPatientLoading] = useState(true);

  const [treatmentData, setTreatmentData] = useState([]);
  const [treatmentError, setTreatmentError] = useState(null);
  const [treatmentLoading, setTreatmentLoading] = useState(true);

  const [selectedTreatmentId, setSelectedTreatmentId] = useState(null);

  // const { data: patientData, error: patientError, isLoading: patientLoading } = useSWR(`/patient/${patientId}/`, fetcher);
  useEffect(() => {
    axiosService
      .get(`/patient/${patientId}/`)
      .then((res) => {
        setPatientData(res.data);
        setPatientLoading(false);
      })
      .catch((err) => {
        setPatientError(err.message);
      });
  }, [patientId]);
  console.log(patientData);

  useEffect(() => {
    setTreatmentData([]);
    axiosService
      .get(`/patient/${patientId}/treatment/`)
      .then((res) => {
        setTreatmentData(res.data);
        setTreatmentLoading(false);
      })
      .catch((err) => {
        setTreatmentError(err.message);
      });
  }, []);
  console.log(treatmentData);
  // const {
  //   data: treatmentData,
  //   error: treatmentError,
  //   isLoading: treatmentLoading,
  //   mutate: mutateTreatmentData
  // } = useSWR(`/patient/${patientId}/treatment/`, fetcher);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'hospital',
      headerName: 'Hospital',
      width: 150,
      editable: true
    },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleEdit(params)} sx={{ color: '#9c27b0' }}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(params.id)} sx={{ color: '#f44336' }}>
            <DeleteIcon />
          </IconButton>
        </>
      )
    }
  ];
  // end of column
  const handleEdit = (treatment) => {
    setSelectedTreatmentId(treatment.row);
    setOpen(true);
  };
  const handleDelete = (id) => {
    axiosService
      .delete(`/patient/${patientId}/treatment/${id}/`)
      .then(() => {
        enqueueSnackbar('Patient Deleted successfully!!!', { variant: 'success' });
      })
      .catch(() => {
        enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
      });
  };

  const handleClickOpen = () => {
    setSelectedTreatmentId(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTreatment = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedTreatmentId) {
      axiosService
        .put(`/patient/${patientId}/treatment/${selectedTreatmentId.id}/`, values)
        .then(() => {
          enqueueSnackbar('Patient added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the patient!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/patient/${patientId}/treatment/`, values)
        .then(() => {
          enqueueSnackbar('Patient added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the patient!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    }
    setOpen(false);
  };

  // rendering

  if (patientLoading) {
    return <div>Loading...</div>;
  }
  if (treatmentLoading) {
    return <div>Loading...</div>;
  }
  if (patientError) {
    return <div>Error on Patient</div>;
  }
  if (treatmentError) {
    return <div>Error on Treatment</div>;
  }

  return (
    <>
      <h1>
        {patientData.fname}-{patientData.mname}-{patientData.lname}
        Add Treatment
      </h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Treatment
      </Button>
      <div>
        <DataGrid
          rows={treatmentData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>

      <Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{selectedTreatmentId ? 'Edit Treatment' : 'Add Treatment'}</DialogTitle>
        <DialogContent>
          <TreatmentForm onSubmit={handleAddTreatment} onClose={handleClose} pid={patientId} treat={selectedTreatmentId} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PatientDetail;
