import * as React from 'react';
import { FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axiosService, { fetcher } from 'helpers/axios';
import { useSnackbar } from 'notistack';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

// initial dialog setting
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired
};
// end of dialog setting

export default function AddTreatment() {
  const [open, setOpen] = React.useState(false);
  const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [currentPatientId, setCurrentPatientId] = React.useState(patientId);
  const [selectedTreatment, setSelectedTreatment] = React.useState({});

  React.useEffect(() => {
    setCurrentPatientId(patientId);
  }, [patientId]);

  // fetching treatment data
  const {
    data: treatmentData,
    error: treatmentError,
    isLoading: treatmentLoading,
    mutate: treatmentMutate
  } = useSWR(`/patient/${currentPatientId}/treatment/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'hospital',
      headerName: 'Hospital',
      width: 200,
      editable: true
    },
    {
      field: 'doctor_name',
      headerName: 'Doctor',
      width: 100,
      editable: true
    },
    {
      field: 'hospitalized_date',
      headerName: 'Hospitalized Date',
      width: 100,
      editable: true
    },
    {
      field: 'dischared_date',
      headerName: 'Dischared Date',
      width: 100,
      editable: true
    },
    {
      field: 'expired_date',
      headerName: 'Expired Date',
      width: 100,
      editable: true
    },
    {
      field: 'current_status',
      headerName: 'Current Status',
      width: 100,
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
  // end of column initalization

  // to dialog open and close
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  // end of dialog open and close

  // handle edit delete and add
  const handleEdit = (treatment) => {
    setSelectedTreatment(treatment.row);
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

  const handleAddTreatment = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedTreatment.id) {
      axiosService
        .put(`/patient/${patientId}/treatment/${selectedTreatment.id}/`, values)
        .then(() => {
          enqueueSnackbar('Patient updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          treatmentMutate();
          setSelectedTreatment({});
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
  // end of  handle edit delete and add

  if (treatmentLoading) {
    return <div>Loading...</div>;
  }

  if (treatmentError) {
    return <div>Error on Treatment</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Treatment Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Treatment
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
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
      {/* end of data grid */}
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          {selectedTreatment.id ? 'Update Treatment Data' : 'Add Treatment Data'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            patient: patientId,
            hospitalized_date: selectedTreatment.id ? dayjs(selectedTreatment.hospitalized_date) : null,
            hospital: selectedTreatment?.hospital || '',
            doctor_name: selectedTreatment?.doctor_name || '',
            dischared_date: selectedTreatment.id ? dayjs(selectedTreatment.dischared_date) : null,
            expired_date: selectedTreatment.id ? dayjs(selectedTreatment.expired_date) : null,
            current_status: selectedTreatment?.current_status || ''
          }}
          validationSchema={Yup.object().shape({
            hospital: Yup.string().required('Hospital name is required'),
            hospitalized_date: Yup.date().typeError('Hospitalized date is required'),
            dischared_date: Yup.date().typeError('Dischared date is required'),
            doctor_name: Yup.string().required('Doctor name is required'),
            current_status: Yup.string().required('Current Status is required')
          })}
          onSubmit={handleAddTreatment}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* doa */}
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="dob">Hospitalized Date*</InputLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          name="hospitalized_date"
                          views={['year', 'month', 'day']}
                          value={values.hospitalized_date}
                          onChange={(newValue) => setFieldValue('hospitalized_date', newValue, true)}
                          error={Boolean(touched.hospitalized_date && errors.hospitalized_date)}
                        />
                        {touched.hospitalized_date && errors.hospitalized_date && (
                          <FormHelperText error id="standard-weight-helper-text-hospitalized_date">
                            {errors.hospitalized_date}
                          </FormHelperText>
                        )}
                      </LocalizationProvider>
                    </Stack>
                  </Grid>
                  {/* end of doa */}

                  {/* hospital info */}
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="hospital">Hospital*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="hospital"
                        type="text"
                        value={values.hospital}
                        name="hospital"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter hospital name"
                        error={Boolean(touched.hospital && errors.hospital)}
                      />
                      {touched.hospital && errors.hospital && (
                        <FormHelperText error id="standard-weight-helper-text-hospital">
                          {errors.hospital}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}

                  {/* doctor info */}
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="doctor_name">Doctor Name*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="doctor_name"
                        type="text"
                        value={values.doctor_name}
                        name="doctor_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter doctor_name name"
                        error={Boolean(touched.doctor_name && errors.doctor_name)}
                      />
                      {touched.doctor_name && errors.doctor_name && (
                        <FormHelperText error id="standard-weight-helper-text-doctor_name">
                          {errors.doctor_name}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of doctor info*/}

                  {/* dischared date */}
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="dischared_date">Dischared Date*</InputLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          name="dischared_date"
                          views={['year', 'month', 'day']}
                          value={values.dischared_date}
                          onChange={(newValue) => setFieldValue('dischared_date', newValue, true)}
                          error={Boolean(touched.dischared_date && errors.dischared_date)}
                        />
                        {touched.dischared_date && errors.dischared_date && (
                          <FormHelperText error id="standard-weight-helper-text-dischared_date">
                            {errors.dischared_date}
                          </FormHelperText>
                        )}
                      </LocalizationProvider>
                    </Stack>
                  </Grid>
                  {/* end of dischared date*/}

                  {/* death date */}
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="lastname">Expired Date</InputLabel>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          name="expired_date"
                          value={values.expired_date}
                          onChange={(newValue) => setFieldValue('expired_date', newValue, true)}
                        />
                      </LocalizationProvider>
                    </Stack>
                  </Grid>
                  {/* end of death date */}

                  {/* current status */}
                  <Grid item xs={12} md={4}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="current_status">Current Status*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="current_status"
                        type="text"
                        value={values.current_status}
                        name="current_status"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter current_status name"
                        error={Boolean(touched.current_status && errors.current_status)}
                      />
                      {touched.current_status && errors.current_status && (
                        <FormHelperText error id="standard-weight-helper-text-current_status">
                          {errors.current_status}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of current status */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedTreatment.id ? 'Update' : 'Save'}
                </Button>
                <Button autoFocus variant="outlined" color="error" onClick={handleClose}>
                  Cancel
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </BootstrapDialog>
    </div>
  );
}
