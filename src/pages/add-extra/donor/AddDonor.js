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
// import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import axiosService, { fetcher } from 'helpers/axios';
import { useSnackbar } from 'notistack';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';

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

export default function AddDonor() {
  const [open, setOpen] = React.useState(false);
  // const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  // const [currentPatientId, setCurrentPatientId] = React.useState(patientId);
  const [selectedDonor, setSelectedDonor] = React.useState({});

  // React.useEffect(() => {
  //   setCurrentPatientId(patientId);
  // }, [patientId]);

  // fetching treatment data
  const {
    data: donorData,
    error: donorError,
    isLoading: donorLoading,
    mutate: donorMutate
  } = useSWR(`/donor/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'donor_name',
      headerName: 'Donor Name',
      width: 200,
      editable: true
    },
    {
      field: 'donor_address',
      headerName: 'Donor Address',
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
  const handleEdit = (donor) => {
    // alert(donor.id);
    setSelectedDonor(donor.row);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete donro information?')) {
      axiosService
        .delete(`/donor/${id}/`)
        .then(() => {
          enqueueSnackbar('Patient Deleted successfully!!!', { variant: 'success' });
          donorMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddDonor = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedDonor.id) {
      axiosService
        .put(`/donor/${selectedDonor.id}/`, values)
        .then(() => {
          enqueueSnackbar('Patient updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          donorMutate();
          setSelectedDonor({});
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the donor!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/donor/`, values)
        .then(() => {
          enqueueSnackbar('Donor added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          donorMutate();
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

  if (donorLoading) {
    return <div>Loading...</div>;
  }

  if (donorError) {
    return <div>Error on Doner</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Donor Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add Donor
          </Button>
        </Grid>
      </Grid>

      {/* data grid */}
      <DataGrid
        rows={donorData}
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
          {selectedDonor.id ? 'Update Treatment Data' : 'Add Treatment Data'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            donor_name: selectedDonor?.donor_name || '',
            donor_address: selectedDonor?.donor_address || ''
            // hospitalized_date: selectedTreatment.id ? dayjs(selectedTreatment.hospitalized_date) : null,
            // hospital: selectedTreatment?.hospital || '',
            // doctor_name: selectedTreatment?.doctor_name || '',
            // dischared_date: selectedTreatment.id ? dayjs(selectedTreatment.dischared_date) : null,
            // expired_date: selectedTreatment.id ? dayjs(selectedTreatment.expired_date) : null,
            // current_status: selectedTreatment?.current_status || ''
          }}
          validationSchema={Yup.object().shape({
            donor_name: Yup.string().required('Donor name is required')
            // hospitalized_date: Yup.date().typeError('Hospitalized date is required'),
            // dischared_date: Yup.date().typeError('Dischared date is required'),
            // doctor_name: Yup.string().required('Doctor name is required'),
            // current_status: Yup.string().required('Current Status is required')
          })}
          onSubmit={handleAddDonor}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* donor info */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="donor">Donor*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="donor"
                        type="text"
                        value={values.donor_name}
                        name="donor_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter donor name"
                        error={Boolean(touched.donor_name && errors.donor_name)}
                      />
                      {touched.donor_name && errors.donor_name && (
                        <FormHelperText error id="standard-weight-helper-text-donor_name">
                          {errors.donor_name}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}
                  {/* donate  */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="donor_address">Donate Address</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="donor_address"
                        type="text"
                        value={values.donor_address}
                        name="donor_address"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter donor_address name"
                        error={Boolean(touched.donor_address && errors.donor_address)}
                      />
                      {touched.donor_address && errors.donor_address && (
                        <FormHelperText error id="standard-weight-helper-text-donor_address">
                          {errors.donor_address}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of donate */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedDonor.id ? 'Update' : 'Save'}
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
