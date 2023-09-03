import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';
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
// import { useNavigate } from 'react-router-dom';

import * as Yup from 'yup';
import { Formik } from 'formik';
import axiosService, { fetcher } from 'helpers/axios';
import { useState } from 'react';

const PatientDetail = () => {
  const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);

  const {
    data: patientData,
    error: patientError,
    isLoading: patientLoading
  } = useSWR(`/patient/${patientId}/`, fetcher, { revalidateOnMount: true, refreshInterval: 1000 });

  const {
    data: treatmentData,
    error: treatmentError,
    isLoading: treatmentLoading
  } = useSWR(`/patient/${patientId}/treatment`, fetcher, { revalidateOnMount: true, refreshInterval: 1000 });

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
          <IconButton onClick={() => handleEdit(params.id)} sx={{ color: '#9c27b0' }}>
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
  const handleEdit = () => {};
  const handleDelete = (id) => {
    axiosService
      .delete(`/patient/${patientId}/treatment/${id}`)
      .then(() => {
        enqueueSnackbar('Patient Deleted successfully!!!', { variant: 'success' });
      })
      .catch(() => {
        enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
      });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // rendering

  if (patientError || treatmentError) {
    return <div>Error loading data</div>;
  }

  if (patientLoading || treatmentLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>
        {patientData.fname}-{patientData.mname}-{patientData.lname}
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
        <DialogTitle id="responsive-dialog-title">{'Add Treatment'}</DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              patient: patientId,
              hospital: '',
              submit: null
            }}
            validationSchema={Yup.object().shape({
              hospital: Yup.string().required('Hospital is required')
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
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
            }}
          >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
              <form noValidate>
                <Grid item xs={12}>
                  <Stack spacing={1}>
                    <InputLabel htmlFor="hospital">Hospital</InputLabel>
                    <OutlinedInput
                      id="hospital"
                      type="hospital"
                      value={values.hospital}
                      name="hospital"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Enter hospital address"
                      fullWidth
                      error={Boolean(touched.hospital && errors.hospital)}
                    />
                    {touched.hospital && errors.hospital && (
                      <FormHelperText error id="standard-weight-helper-text-hospital">
                        {errors.hospital}
                      </FormHelperText>
                    )}
                  </Stack>
                </Grid>
                <Button disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  Add
                </Button>
                <Button onClick={handleClose} autoFocus color="secondary">
                  Close
                </Button>
              </form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PatientDetail;
