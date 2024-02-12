import * as React from 'react';
import { FormHelperText, Select, MenuItem, Grid, InputLabel, OutlinedInput, Stack, Typography, TextField } from '@mui/material';
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
// end of dialog settingy

export default function AddPatientPhysiotherapy() {
  const [open, setOpen] = React.useState(false);
  const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [currentPatientId, setCurrentPatientId] = React.useState(patientId);
  const [selectedPhysiotherapy, setSelectedPhysiotherapy] = React.useState({});
  const [selectedFollowupId, setSelectedFollowupId] = React.useState('');

  React.useEffect(() => {
    setCurrentPatientId(patientId);
  }, [patientId]);

  // fetching treatment data
  const {
    data: physiotherapyData,
    error: physiotherapyError,
    isLoading: physiotherapyLoading,
    mutate: physiotherapyMutate
  } = useSWR(`/patient/${currentPatientId}/physiotherapy/`, fetcher, { revalidateOnMount: true });

  const {
    data: followUpData,
    error: followUpError,
    isLoading: followUpLoading
  } = useSWR(`/follow-up-summary/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'initial_status',
      headerName: 'Inital Status',
      width: 100,
      editable: true
    },
    {
      field: 'applied_methods',
      headerName: 'Applied Methods',
      width: 100,
      editable: true
    },
    {
      field: 'observation',
      headerName: 'Observation',
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
      field: 'mode_of_followup',
      headerName: 'Mode of Followup',
      width: 100,
      editable: true
    },

    {
      field: 'followed_by',
      headerName: 'Followed By',
      width: 100,
      editable: true
    },
    {
      field: 'followup_summary',
      headerName: 'Followup Summary',
      width: 100,
      editable: true,
      valueGetter: (params) => `${params.row.followup_summary.follow_up_summary || ''}`
    },
    {
      field: 'number_of_session',
      headerName: 'Number of Session',
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
    setSelectedPhysiotherapy({});
    setSelectedFollowupId('');
    setOpen(false);
  };
  // end of dialog open and close

  // handle edit delete and add
  const handleEdit = (physiotherapy) => {
    setSelectedPhysiotherapy(physiotherapy.row);
    setSelectedFollowupId(physiotherapy.row.followup_summary.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete physiotherapy data?')) {
      axiosService
        .delete(`/patient/${patientId}/physiotherapy/${id}/`)
        .then(() => {
          enqueueSnackbar('physiotherapy Deleted successfully!!!', { variant: 'success' });
          physiotherapyMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddPshychosocial = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedPhysiotherapy.id) {
      axiosService
        .put(`/patient/${patientId}/physiotherapy/${selectedPhysiotherapy.id}/`, values)
        .then(() => {
          enqueueSnackbar('physiotherapy updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          physiotherapyMutate();
          setSelectedPhysiotherapy({});
          setSelectedFollowupId('');
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the physiotherapy!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/patient/${patientId}/physiotherapy/`, values)
        .then(() => {
          enqueueSnackbar('physiotherapy added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          physiotherapyMutate();
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the physiotherapy!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    }
    setOpen(false);
  };
  // end of  handle edit delete and add

  if (physiotherapyLoading || followUpLoading) {
    return <div>Loading...</div>;
  }

  if (physiotherapyError || followUpError) {
    return <div>Error on physiotherapy data</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Physiotherapy Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Physiotherapy
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={physiotherapyData}
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
          {selectedPhysiotherapy.id ? 'Update Physiotherapy Data' : 'Add Physiotherapy Data'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            patient: patientId,
            initial_status: selectedPhysiotherapy?.initial_status || '',
            applied_methods: selectedPhysiotherapy?.applied_methods || '',
            dischared_status: selectedPhysiotherapy?.dischared_status || '',
            observation: selectedPhysiotherapy?.observation || '',
            current_status: selectedPhysiotherapy?.current_status || '',
            mode_of_followup: selectedPhysiotherapy?.mode_of_followup || '',
            followed_by: selectedPhysiotherapy?.followed_by || '',
            followup_summary: selectedFollowupId || '',
            number_of_session: selectedPhysiotherapy?.number_of_session || ''
          }}
          validationSchema={Yup.object().shape({
            initial_status: Yup.string().required('Client History is required'),
            followup_summary: Yup.string().required('Followup Summary is required'),
            number_of_session: Yup.string().required('Number of session is required')
          })}
          onSubmit={handleAddPshychosocial}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* client initial_status */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="initial_status">Initial Status</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.initial_status}
                        name="initial_status"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter initial_status name"
                        error={Boolean(touched.initial_status && errors.initial_status)}
                      />
                      {touched.initial_status && errors.initial_status && (
                        <FormHelperText error id="standard-weight-helper-text-initial_status">
                          {errors.initial_status}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client initial_status */}

                  {/* client applied_methods */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="applied_methods">Applied Method</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.applied_methods}
                        name="applied_methods"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter applied_methods name"
                        error={Boolean(touched.applied_methods && errors.applied_methods)}
                      />
                      {touched.applied_methods && errors.applied_methods && (
                        <FormHelperText error id="standard-weight-helper-text-applied_methods">
                          {errors.applied_methods}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client applied_methods */}

                  {/* client dischared_status */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="dischared_status">Dischared Status</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.dischared_status}
                        name="dischared_status"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter dischared_status name"
                        error={Boolean(touched.dischared_status && errors.dischared_status)}
                      />
                      {touched.dischared_status && errors.dischared_status && (
                        <FormHelperText error id="standard-weight-helper-text-dischared_status">
                          {errors.dischared_status}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of dischared_status */}

                  {/* client observation */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="observation"> Observation</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.observation}
                        name="observation"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter observation"
                        error={Boolean(touched.observation && errors.observation)}
                      />
                      {touched.observation && errors.observation && (
                        <FormHelperText error id="standard-weight-helper-text-observation">
                          {errors.observation}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of observation */}

                  {/* client current_status */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="current_status">Current Status</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
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
                  {/* end of current_status */}

                  {/* client mode_of_followup */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="mode_of_followup"> Mode of Followup</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.mode_of_followup}
                        name="mode_of_followup"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter mode_of_followup name"
                        error={Boolean(touched.mode_of_followup && errors.mode_of_followup)}
                      />
                      {touched.mode_of_followup && errors.mode_of_followup && (
                        <FormHelperText error id="standard-weight-helper-text-mode_of_followup">
                          {errors.mode_of_followup}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client history */}

                  {/* followed_by info */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="followed_by">Followed By</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="followed_by"
                        type="text"
                        value={values.followed_by}
                        name="followed_by"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter followed_by name"
                        error={Boolean(touched.followed_by && errors.followed_by)}
                      />
                      {touched.followed_by && errors.followed_by && (
                        <FormHelperText error id="standard-weight-helper-text-followed_by">
                          {errors.followed_by}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}

                  {/* client followup_summary */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="followup_summary">Followup Summary</InputLabel>
                      <Select
                        fullWidth
                        labelId="followup_summary"
                        id="followup_summary"
                        value={values.followup_summary}
                        name="followup_summary"
                        onChange={handleChange}
                        error={Boolean(touched.followup_summary && errors.followup_summary)}
                      >
                        {followUpData.map((followup) => (
                          <MenuItem key={followup.id} value={followup.id}>
                            {followup.follow_up_summary}
                          </MenuItem>
                        ))}
                      </Select>
                      {touched.followup_summary && errors.followup_summary && (
                        <FormHelperText error id="standard-weight-helper-text-followup_summary">
                          {errors.followup_summary}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of followup_summary */}

                  {/* no of sess */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="number_of_session">Number of Session*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="number_of_session"
                        type="number"
                        value={values.number_of_session}
                        name="number_of_session"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Number of Session"
                        error={Boolean(touched.number_of_session && errors.number_of_session)}
                      />
                      {touched.number_of_session && errors.number_of_session && (
                        <FormHelperText error id="standard-weight-helper-text-number_of_session">
                          {errors.number_of_session}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end session */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedPhysiotherapy.id ? 'Update' : 'Save'}
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
