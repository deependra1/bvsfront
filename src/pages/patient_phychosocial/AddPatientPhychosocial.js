import * as React from 'react';
import { FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography, TextField } from '@mui/material';
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
// end of dialog setting

export default function AddPatientPhychosocial() {
  const [open, setOpen] = React.useState(false);
  const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [currentPatientId, setCurrentPatientId] = React.useState(patientId);
  const [selectedPshychosocial, setSelectedPshychosocial] = React.useState({});

  React.useEffect(() => {
    setCurrentPatientId(patientId);
  }, [patientId]);

  // fetching treatment data
  const {
    data: pshychosocialData,
    error: pshychosocialError,
    isLoading: pshychosocialLoading,
    mutate: pshychosocialMutate
  } = useSWR(`/patient/${currentPatientId}/pshychosocial/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'client_history',
      headerName: 'Client History',
      width: 100,
      editable: true
    },
    {
      field: 'client_complain',
      headerName: 'Client Complain',
      width: 100,
      editable: true
    },
    {
      field: 'intervention',
      headerName: 'Intervention',
      width: 100,
      editable: true
    },
    {
      field: 'changes_after_intervention',
      headerName: 'Changes After Intervention',
      width: 100,
      editable: true
    },
    {
      field: 'detailed_followup_report',
      headerName: 'Detailed Followup Report',
      width: 100,
      editable: true
    },
    {
      field: 'followup_summary',
      headerName: 'Followup Summary',
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
    setSelectedPshychosocial({});
    setOpen(false);
  };
  // end of dialog open and close

  // handle edit delete and add
  const handleEdit = (pshychosocial) => {
    setSelectedPshychosocial(pshychosocial.row);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete pshychosocial data?')) {
      axiosService
        .delete(`/patient/${patientId}/pshychosocial/${id}/`)
        .then(() => {
          enqueueSnackbar('pshychosocial Deleted successfully!!!', { variant: 'success' });
          pshychosocialMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddPshychosocial = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedPshychosocial.id) {
      axiosService
        .put(`/patient/${patientId}/pshychosocial/${selectedPshychosocial.id}/`, values)
        .then(() => {
          enqueueSnackbar('pshychosocial updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          pshychosocialMutate();
          setSelectedPshychosocial({});
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the pshychosocial!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/patient/${patientId}/pshychosocial/`, values)
        .then(() => {
          enqueueSnackbar('Patient added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          pshychosocialMutate();
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

  if (pshychosocialLoading) {
    return <div>Loading...</div>;
  }

  if (pshychosocialError) {
    return <div>Error on Treatment</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Pshychosocial Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Pshychosocial
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={pshychosocialData}
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
          {selectedPshychosocial.id ? 'Update Pshyosocial Data' : 'Add Pshyosocial Data'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            patient: patientId,
            client_history: selectedPshychosocial?.client_history || '',
            client_complain: selectedPshychosocial?.client_complain || '',
            intervention: selectedPshychosocial?.intervention || '',
            changes_after_intervention: selectedPshychosocial?.changes_after_intervention || '',
            detailed_followup_report: selectedPshychosocial?.detailed_followup_report || '',
            followup_summary: selectedPshychosocial?.followup_summary || '',
            mode_of_followup: selectedPshychosocial?.mode_of_followup || '',
            followed_by: selectedPshychosocial?.followed_by || ''
          }}
          validationSchema={Yup.object().shape({
            client_history: Yup.string().required('Client History is required')
            // hospitalized_date: Yup.date().typeError('Hospitalized date is required'),
            // dischared_date: Yup.date().typeError('Dischared date is required'),
            // doctor_name: Yup.string().required('Doctor name is required'),
            // current_status: Yup.string().required('Current Status is required')
          })}
          onSubmit={handleAddPshychosocial}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* client history */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="client_history">Client History</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.client_history}
                        name="client_history"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter client_history name"
                        error={Boolean(touched.client_history && errors.client_history)}
                      />
                      {touched.client_history && errors.client_history && (
                        <FormHelperText error id="standard-weight-helper-text-client_history">
                          {errors.client_history}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client history */}

                  {/* client complain */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="client_complain">Client Complain</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.client_complain}
                        name="client_complain"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter client_complain name"
                        error={Boolean(touched.client_complain && errors.client_complain)}
                      />
                      {touched.client_complain && errors.client_complain && (
                        <FormHelperText error id="standard-weight-helper-text-client_complain">
                          {errors.client_complain}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client complain */}

                  {/* client intervention */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="intervention">Intervention</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.intervention}
                        name="intervention"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter intervention name"
                        error={Boolean(touched.intervention && errors.intervention)}
                      />
                      {touched.intervention && errors.intervention && (
                        <FormHelperText error id="standard-weight-helper-text-intervention">
                          {errors.intervention}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client history */}

                  {/* client changes_after_intervention */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="changes_after_intervention"> Changes After Intervention</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.changes_after_intervention}
                        name="changes_after_intervention"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter changes_after_intervention name"
                        error={Boolean(touched.changes_after_intervention && errors.changes_after_intervention)}
                      />
                      {touched.changes_after_intervention && errors.changes_after_intervention && (
                        <FormHelperText error id="standard-weight-helper-text-changes_after_intervention">
                          {errors.changes_after_intervention}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client history */}

                  {/* client detailed_followup_report */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="detailed_followup_report">Detailed Followup Report</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.detailed_followup_report}
                        name="detailed_followup_report"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter detailed_followup_report name"
                        error={Boolean(touched.detailed_followup_report && errors.detailed_followup_report)}
                      />
                      {touched.detailed_followup_report && errors.detailed_followup_report && (
                        <FormHelperText error id="standard-weight-helper-text-detailed_followup_report">
                          {errors.detailed_followup_report}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client history */}

                  {/* client followup_summary */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="followup_summary">Followup Summary</InputLabel>
                      <TextField
                        fullWidth
                        multiline
                        rows={3}
                        value={values.followup_summary}
                        name="followup_summary"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter followup_summary name"
                        error={Boolean(touched.followup_summary && errors.followup_summary)}
                      />
                      {touched.followup_summary && errors.followup_summary && (
                        <FormHelperText error id="standard-weight-helper-text-followup_summary">
                          {errors.followup_summary}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of client history */}

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
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedPshychosocial.id ? 'Update' : 'Save'}
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
