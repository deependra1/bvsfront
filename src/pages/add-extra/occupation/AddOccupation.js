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

export default function AddOccupation() {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedOccupation, setSelectedOccupation] = React.useState({});

  // fetching treatment data
  const {
    data: occupationData,
    error: occupationError,
    isLoading: occupationLoading,
    mutate: occupationMutate
  } = useSWR(`/occupation/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'occupation_name',
      headerName: 'Occupation Name',
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
    setOpen(false);
  };
  // end of dialog open and close

  // handle edit delete and add
  const handleEdit = (occupation) => {
    setSelectedOccupation(occupation.row);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete occupation information?')) {
      axiosService
        .delete(`/occupation/${id}/`)
        .then(() => {
          enqueueSnackbar('Occupation Deleted successfully!!!', { variant: 'success' });
          occupationMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddDonor = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedOccupation.id) {
      axiosService
        .put(`/occupation/${selectedOccupation.id}/`, values)
        .then(() => {
          enqueueSnackbar('Patient updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          occupationMutate();
          setSelectedOccupation({});
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the occupation!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/occupation/`, values)
        .then(() => {
          enqueueSnackbar('Occupation added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          occupationMutate();
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the occupation!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    }
    setOpen(false);
  };
  // end of  handle edit delete and add

  if (occupationLoading) {
    return <div>Loading...</div>;
  }

  if (occupationError) {
    return <div>Error on Doner</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Occupation Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Occupation
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={occupationData}
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
          {selectedOccupation.id ? 'Update Occupation Data' : 'Add Occupation Data'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            occupation_name: selectedOccupation?.occupation_name || ''
          }}
          validationSchema={Yup.object().shape({
            occupation_name: Yup.string().required('Occupation name is required')
          })}
          onSubmit={handleAddDonor}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* donor info */}
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="occupation">Occupation*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="occupation"
                        type="text"
                        value={values.occupation_name}
                        name="occupation_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter occupation name"
                        error={Boolean(touched.occupation_name && errors.occupation_name)}
                      />
                      {touched.occupation_name && errors.occupation_name && (
                        <FormHelperText error id="standard-weight-helper-text-occupation_name">
                          {errors.occupation_name}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedOccupation.id ? 'Update' : 'Save'}
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
