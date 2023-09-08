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

export default function AddBurnCause() {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedCause, setSelectedCause] = React.useState({});

  // fetching treatment data
  const {
    data: causeData,
    error: causeError,
    isLoading: causeLoading,
    mutate: causeMutate
  } = useSWR(`/burn_cause/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'burn_cause',
      headerName: 'Cause of Burn',
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
    setSelectedCause({});
    setOpen(false);
  };
  // end of dialog open and close

  // handle edit delete and add
  const handleEdit = (cause) => {
    setSelectedCause(cause.row);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete ?')) {
      axiosService
        .delete(`/burn_cause/${id}/`)
        .then(() => {
          enqueueSnackbar('Deleted successfully!!!', { variant: 'success' });
          causeMutate();
        })
        .catch(() => {
          enqueueSnackbar('Something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddCause = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedCause.id) {
      axiosService
        .put(`/burn_cause/${selectedCause.id}/`, values)
        .then(() => {
          enqueueSnackbar('Updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          causeMutate();
          setSelectedCause({});
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the occupation!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/burn_cause/`, values)
        .then(() => {
          enqueueSnackbar('Data added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          causeMutate();
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding data!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    }
    setOpen(false);
  };
  // end of  handle edit delete and add

  if (causeLoading) {
    return <div>Loading...</div>;
  }

  if (causeError) {
    return <div>Error on Ethnic group</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Cause of Burn Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add New
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={causeData}
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
          {selectedCause.id ? 'Update Cause of Burn' : 'Add Cause of Burn'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            burn_cause: selectedCause?.burn_cause || ''
          }}
          validationSchema={Yup.object().shape({
            burn_cause: Yup.string().required('Required')
          })}
          onSubmit={handleAddCause}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* donor info */}
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="burn_cause">Cause of Burn*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="burn_cause"
                        type="text"
                        value={values.burn_cause}
                        name="burn_cause"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter cause of burn"
                        error={Boolean(touched.burn_cause && errors.burn_cause)}
                      />
                      {touched.burn_cause && errors.burn_cause && (
                        <FormHelperText error id="standard-weight-helper-text-burn_cause">
                          {errors.burn_cause}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedCause.id ? 'Update' : 'Save'}
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
