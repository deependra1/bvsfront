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

export default function AddReligion() {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedReligion, setSelectedReligion] = React.useState({});

  // fetching treatment data
  const {
    data: religionData,
    error: religionError,
    isLoading: religionLoading,
    mutate: religionMutate
  } = useSWR(`/religion/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'religion',
      headerName: 'Religion',
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
  const handleEdit = (religion) => {
    setSelectedReligion(religion.row);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete religion?')) {
      axiosService
        .delete(`/religion/${id}/`)
        .then(() => {
          enqueueSnackbar('Religion Deleted successfully!!!', { variant: 'success' });
          religionMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddReligion = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedReligion.id) {
      axiosService
        .put(`/religion/${selectedReligion.id}/`, values)
        .then(() => {
          enqueueSnackbar('Religion updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          religionMutate();
          setSelectedReligion({});
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the religion!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/religion/`, values)
        .then(() => {
          enqueueSnackbar('Religion added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          religionMutate();
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the religion!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    }
    setOpen(false);
  };
  // end of  handle edit delete and add

  if (religionLoading) {
    return <div>Loading...</div>;
  }

  if (religionError) {
    return <div>Error on Ethnic group</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Religion Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Religion
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={religionData}
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
          {selectedReligion.id ? 'Update Religion Group' : 'Add Religion Group'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            religion: selectedReligion?.religion || ''
          }}
          validationSchema={Yup.object().shape({
            religion: Yup.string().required('Religion is required')
          })}
          onSubmit={handleAddReligion}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* donor info */}
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="religion">Religion*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="religion"
                        type="text"
                        value={values.religion}
                        name="religion"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter religion name"
                        error={Boolean(touched.religion && errors.religion)}
                      />
                      {touched.religion && errors.religion && (
                        <FormHelperText error id="standard-weight-helper-text-religion">
                          {errors.religion}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedReligion.id ? 'Update' : 'Save'}
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
