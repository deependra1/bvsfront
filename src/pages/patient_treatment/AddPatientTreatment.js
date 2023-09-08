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
// import { Container } from '../../../node_modules/@mui/material/index';

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

export default function AddPatientTreatment() {
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
      field: 'mode_of_transport',
      headerName: 'Transport',
      width: 70,
      editable: true
    },
    {
      field: 'distance',
      headerName: 'Distance',
      width: 70,
      editable: true
    },
    {
      field: 'hospital',
      headerName: 'Hospital',
      width: 70,
      editable: true
    },
    {
      field: 'doctor_name',
      headerName: 'Doctor',
      width: 70,
      editable: true
    },
    {
      field: 'hospitalized_date',
      headerName: 'Hospitalized',
      width: 85,
      editable: true
    },
    {
      field: 'dischared_date',
      headerName: 'Dischared',
      width: 70,
      editable: true
    },
    {
      field: 'expired_date',
      headerName: 'Expired',
      width: 70,
      editable: true
    },
    {
      field: 'duration_of_stay',
      headerName: 'Duration',
      width: 70,
      editable: true
    },
    {
      field: 'no_of_surgery',
      headerName: 'Surgery',
      width: 70,
      editable: true
    },
    {
      field: 'no_of_skin_graft',
      headerName: 'Skin Graft',
      width: 70,
      editable: true
    },
    {
      field: 'no_of_debridement',
      headerName: 'Debridement',
      width: 70,
      editable: true
    },
    {
      field: 'no_of_amputation',
      headerName: 'Amputation',
      width: 70,
      editable: true
    },
    {
      field: 'no_of_dressing',
      headerName: 'Dressing',
      width: 70,
      editable: true
    },
    {
      field: 'no_of_nutritional',
      headerName: 'Nutration',
      width: 70,
      editable: true
    },
    {
      field: 'medical_support',
      headerName: 'Medical',
      width: 70,
      editable: true
    },

    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 70,
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
    setSelectedTreatment({});
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
    // alert(JSON.stringify(values, null, 2));
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
              pageSize: 10
            }
          }
        }}
        pageSizeOptions={[10]}
        // checkboxSelection
        disableRowSelectionOnClick
        // sx={{
        //   maxWidth: '80%',
        //   overflow: 'hidden'
        // }}
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
            mode_of_transport: selectedTreatment?.mode_of_transport || '',
            distance: selectedTreatment?.distance || null,
            duration_of_stay: selectedTreatment?.duration_of_stay || null,
            no_of_surgery: selectedTreatment?.no_of_surgery || null,
            no_of_skin_graft: selectedTreatment?.no_of_skin_graft || null,
            no_of_debridement: selectedTreatment?.no_of_debridement || null,
            no_of_amputation: selectedTreatment?.no_of_amputation || null,
            no_of_dressing: selectedTreatment?.no_of_dressing || null,
            no_of_nutritional: selectedTreatment?.no_of_nutritional || null,
            medical_support: selectedTreatment?.medical_support || null
          }}
          validationSchema={Yup.object().shape({
            hospital: Yup.string().required('Required'),
            hospitalized_date: Yup.date().typeError('Required').required('Required'),
            doctor_name: Yup.string().required('Required'),
            mode_of_transport: Yup.string().required('Required'),
            distance: Yup.number().positive().integer().notRequired().nullable(),
            duration_of_stay: Yup.number().positive().integer().notRequired().nullable(),
            no_of_surgery: Yup.number().positive().integer().notRequired().nullable(),
            no_of_skin_graft: Yup.number().positive().integer().notRequired().nullable(),
            no_of_debridement: Yup.number().positive().integer().notRequired().nullable(),
            no_of_amputation: Yup.number().positive().integer().notRequired().nullable(),
            no_of_dressing: Yup.number().positive().integer().notRequired().nullable(),
            no_of_nutritional: Yup.number().positive().integer().notRequired().nullable(),
            medical_support: Yup.number().positive().integer().notRequired().nullable()
          })}
          onSubmit={handleAddTreatment}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* mode of transport */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="mode_of_transport">Mode of Transport*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="mode_of_transport"
                        type="text"
                        value={values.mode_of_transport}
                        name="mode_of_transport"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Mode of Transport"
                        error={Boolean(touched.mode_of_transport && errors.mode_of_transport)}
                      />
                      {touched.mode_of_transport && errors.mode_of_transport && (
                        <FormHelperText error id="standard-weight-helper-text-mode_of_transport">
                          {errors.mode_of_transport}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of mode of transport */}

                  {/* Distance */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="distance">Distance*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="distance"
                        type="number"
                        value={values.distance}
                        name="distance"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Distance"
                        error={Boolean(touched.distance && errors.distance)}
                      />
                      {touched.distance && errors.distance && (
                        <FormHelperText error id="standard-weight-helper-text-distance">
                          {errors.distance}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of Distance */}

                  {/* hospital info */}
                  <Grid item xs={12} md={3}>
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
                  <Grid item xs={12} md={3}>
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

                  {/* doa */}
                  <Grid item xs={12} md={3}>
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

                  {/* dischared date */}
                  <Grid item xs={12} md={3}>
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
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="expired_date">Expired Date</InputLabel>
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

                  {/* stay duration */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="duration_of_stay">Duration of Stay*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="duration_of_stay"
                        type="number"
                        value={values.duration_of_stay}
                        name="duration_of_stay"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="in days"
                        error={Boolean(touched.duration_of_stay && errors.duration_of_stay)}
                      />
                      {touched.duration_of_stay && errors.duration_of_stay && (
                        <FormHelperText error id="standard-weight-helper-text-duration_of_stay">
                          {errors.duration_of_stay}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of stay duration */}

                  {/* stay surgery */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="no_of_surgery">Number of Surgery</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="no_of_surgery"
                        type="number"
                        value={values.no_of_surgery}
                        name="no_of_surgery"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Surgery"
                        error={Boolean(touched.no_of_surgery && errors.no_of_surgery)}
                      />
                      {touched.no_of_surgery && errors.no_of_surgery && (
                        <FormHelperText error id="standard-weight-helper-text-no_of_surgery">
                          {errors.no_of_surgery}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of stay surgery */}

                  {/* stay graft */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="no_of_skin_graft">Number of Skin Graft</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="no_of_skin_graft"
                        type="number"
                        value={values.no_of_skin_graft}
                        name="no_of_skin_graft"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Skin Graft"
                        error={Boolean(touched.no_of_skin_graft && errors.no_of_skin_graft)}
                      />
                      {touched.no_of_skin_graft && errors.no_of_skin_graft && (
                        <FormHelperText error id="standard-weight-helper-text-no_of_skin_graft">
                          {errors.no_of_skin_graft}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of graft */}

                  {/* stay debridement */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="no_of_debridement">Number of Debridement</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="no_of_debridement"
                        type="number"
                        value={values.no_of_debridement}
                        name="no_of_debridement"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Debridement"
                        error={Boolean(touched.no_of_debridement && errors.no_of_debridement)}
                      />
                      {touched.no_of_debridement && errors.no_of_debridement && (
                        <FormHelperText error id="standard-weight-helper-text-no_of_debridement">
                          {errors.no_of_debridement}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of debridement */}

                  {/* stay amputation */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="no_of_amputation">Number of Amputation</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="no_of_amputation"
                        type="number"
                        value={values.no_of_amputation}
                        name="no_of_amputation"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Amputation"
                        error={Boolean(touched.no_of_amputation && errors.no_of_amputation)}
                      />
                      {touched.no_of_amputation && errors.no_of_amputation && (
                        <FormHelperText error id="standard-weight-helper-text-no_of_amputation">
                          {errors.no_of_amputation}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of amputation */}

                  {/* stay dressing */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="no_of_dressing">Number of Dressing</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="no_of_dressing"
                        type="number"
                        value={values.no_of_dressing}
                        name="no_of_dressing"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Dressing"
                        error={Boolean(touched.no_of_dressing && errors.no_of_dressing)}
                      />
                      {touched.no_of_dressing && errors.no_of_dressing && (
                        <FormHelperText error id="standard-weight-helper-text-no_of_dressing">
                          {errors.no_of_dressing}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of dressing */}

                  {/* stay nutritional */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="no_of_nutritional">Number of Nutrational</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="no_of_nutritional"
                        type="number"
                        value={values.no_of_nutritional}
                        name="no_of_nutritional"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Nutrational"
                        error={Boolean(touched.no_of_nutritional && errors.no_of_nutritional)}
                      />
                      {touched.no_of_nutritional && errors.no_of_nutritional && (
                        <FormHelperText error id="standard-weight-helper-text-no_of_nutritional">
                          {errors.no_of_nutritional}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of nutritional */}

                  {/* stay nutritional */}
                  <Grid item xs={12} md={3}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="medical_support">Medical Support</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="medical_support"
                        type="number"
                        value={values.medical_support}
                        name="medical_support"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Medical Support"
                        error={Boolean(touched.medical_support && errors.medical_support)}
                      />
                      {touched.medical_support && errors.medical_support && (
                        <FormHelperText error id="standard-weight-helper-text-medical_support">
                          {errors.medical_support}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of nutritional */}
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
