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

export default function AddFollowup() {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedFollowup, setSelectedFollowup] = React.useState({});

  // fetching treatment data
  const {
    data: fullowupData,
    error: followupError,
    isLoading: followupLoading,
    mutate: followupMutate
  } = useSWR(`/follow-up-summary/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'follow_up_summary',
      headerName: 'Followup Summary',
      width: 200,
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
    setSelectedFollowup({});
    setOpen(false);
  };
  // end of dialog open and close

  // handle edit delete and add
  const handleEdit = (followup) => {
    setSelectedFollowup(followup.row);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete ?')) {
      axiosService
        .delete(`/follow-up-summary/${id}/`)
        .then(() => {
          enqueueSnackbar('Deleted successfully!!!', { variant: 'success' });
          followupMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddHospital = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedFollowup.id) {
      axiosService
        .put(`/follow-up-summary/${selectedFollowup.id}/`, values)
        .then(() => {
          enqueueSnackbar('Updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          followupMutate();
          setSelectedFollowup({});
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong !!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/follow-up-summary/`, values)
        .then(() => {
          enqueueSnackbar('Followup added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          followupMutate();
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong !!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    }
    setOpen(false);
  };
  // end of  handle edit delete and add

  if (followupLoading) {
    return <div>Loading...</div>;
  }

  if (followupError) {
    return <div>Error on hospital </div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Followup Summary
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Followup Summary
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={fullowupData}
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
          {selectedFollowup.id ? 'Update followup summary' : 'Add followup summary'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            follow_up_summary: selectedFollowup?.follow_up_summary || ''
          }}
          validationSchema={Yup.object().shape({
            follow_up_summary: Yup.string().required('hospital name is required')
          })}
          onSubmit={handleAddHospital}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* donor info */}
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="followup">Followup Summary*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="followup"
                        type="text"
                        value={values.follow_up_summary}
                        name="follow_up_summary"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter followup summary"
                        error={Boolean(touched.follow_up_summary && errors.follow_up_summary)}
                      />
                      {touched.follow_up_summary && errors.follow_up_summary && (
                        <FormHelperText error id="standard-weight-helper-text-follow_up_summary">
                          {errors.follow_up_summary}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedFollowup.id ? 'Update' : 'Save'}
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
