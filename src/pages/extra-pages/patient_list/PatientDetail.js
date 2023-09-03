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
import useSWR from 'swr';
import axiosService, { fetcher } from 'helpers/axios';
import { useState, useEffect } from 'react';
import TreatmentForm from './TreatmentForm';
// import dayjs from 'dayjs';

const PatientDetail = () => {
  const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const [selectedTreatmentId, setSelectedTreatmentId] = useState(null);
  const [currentPatientId, setCurrentPatientId] = useState(patientId);

  useEffect(() => {
    setCurrentPatientId(patientId);
  }, [patientId]);

  const { data: patientData, error: patientError, isLoading: patientLoading } = useSWR(`/patient/${currentPatientId}/`, fetcher);

  const {
    data: treatmentData,
    error: treatmentError,
    isLoading: treatmentLoading,
    mutate: treatmentMutate
  } = useSWR(`/patient/${currentPatientId}/treatment/`, fetcher, { revalidateOnMount: true });

  const columns = [
    {
      field: 'hospital',
      headerName: 'Hospital',
      width: 150,
      editable: true
    },
    {
      field: 'doctor_name',
      headerName: 'Doctor',
      width: 150,
      editable: true
    },
    {
      field: 'hospitalized_date',
      headerName: 'Hospitalized Date',
      width: 150,
      editable: true
    },
    {
      field: 'dischared_date',
      headerName: 'Dischared Date',
      width: 150,
      editable: true
    },
    {
      field: 'expired_date',
      headerName: 'Expired Date',
      width: 150,
      editable: true
    },
    {
      field: 'current_status',
      headerName: 'Current Status',
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
    if (confirm('Are you sure to delete treatment data?')) {
      axiosService
        .delete(`/patient/${patientId}/treatment/${id}/`)
        .then(() => {
          enqueueSnackbar('Patient Deleted successfully!!!', { variant: 'success' });
          treatmentMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
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
          enqueueSnackbar('Patient updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          treatmentMutate();
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
          treatmentMutate();
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
      </h1>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Treatment
      </Button>

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
        // checkboxSelection
        disableRowSelectionOnClick
      />

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
