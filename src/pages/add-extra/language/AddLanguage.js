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

export default function AddLanguage() {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedLanguage, setSelectedLanguage] = React.useState({});

  // fetching treatment data
  const {
    data: languageData,
    error: languageError,
    isLoading: languageLoading,
    mutate: languageMutate
  } = useSWR(`/language/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'language_name',
      headerName: 'Language Name',
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
    setSelectedLanguage({});
    setOpen(false);
  };
  // end of dialog open and close

  // handle edit delete and add
  const handleEdit = (education) => {
    setSelectedLanguage(education.row);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete Language?')) {
      axiosService
        .delete(`/language/${id}/`)
        .then(() => {
          enqueueSnackbar('Deleted successfully!!!', { variant: 'success' });
          languageMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddEducation = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedLanguage.id) {
      axiosService
        .put(`/language/${selectedLanguage.id}/`, values)
        .then(() => {
          enqueueSnackbar('Updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          languageMutate();
          setSelectedLanguage({});
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong !!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/language/`, values)
        .then(() => {
          enqueueSnackbar('Aded successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          languageMutate();
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

  if (languageLoading) {
    return <div>Loading...</div>;
  }

  if (languageError) {
    return <div>Error on Education Level</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Language
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Language
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={languageData}
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
          {selectedLanguage.id ? 'Update Language Level' : 'Add Language Level'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            language_name: selectedLanguage?.language_name || ''
          }}
          validationSchema={Yup.object().shape({
            language_name: Yup.string().required('Education Level is required')
          })}
          onSubmit={handleAddEducation}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* donor info */}
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="ethnic">Language*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="ethnic"
                        type="text"
                        value={values.language_name}
                        name="language_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter language"
                        error={Boolean(touched.language_name && errors.language_name)}
                      />
                      {touched.language_name && errors.language_name && (
                        <FormHelperText error id="standard-weight-helper-text-language_name">
                          {errors.language_name}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedLanguage.id ? 'Update' : 'Save'}
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
