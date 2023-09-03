import * as React from 'react';
import { FormHelperText, Grid, InputLabel, OutlinedInput, Stack, Typography, Select, MenuItem } from '@mui/material';
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

export default function AddPatientDonor() {
  const [open, setOpen] = React.useState(false);
  const { patientId } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [currentPatientId, setCurrentPatientId] = React.useState(patientId);
  const [selectedFunding, setSelectedFunding] = React.useState({});
  const [selectedDonorId, setSelectedDonorId] = React.useState('');

  React.useEffect(() => {
    setCurrentPatientId(patientId);
  }, [patientId]);

  // fetching funding data
  const {
    data: fundingData,
    error: fundingError,
    isLoading: fundingLoading,
    mutate: fundingMutate
  } = useSWR(`/patient/${currentPatientId}/funding/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // fetching donor data
  const { data: donorData } = useSWR(`/donor/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'donorName',
      headerName: 'Donor',
      width: 300,
      editable: true,
      valueGetter: (params) => `${params.row.donor.donor_name || ''}`
    },
    {
      field: 'funding_amount',
      headerName: 'Funding Amount',
      width: 300,
      editable: true
    },

    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 300,
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
  const handleEdit = (funding) => {
    setSelectedFunding(funding.row);
    setSelectedDonorId(funding.row.donor.id);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete funding data?')) {
      axiosService
        .delete(`/patient/${patientId}/funding/${id}/`)
        .then(() => {
          enqueueSnackbar('Funding Deleted successfully!!!', { variant: 'success' });
          fundingMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleAddFunding = (values, { setErrors, setStatus, setSubmitting }) => {
    if (selectedFunding.id) {
      axiosService
        .put(`/patient/${patientId}/funding/${selectedFunding.id}/`, values)
        .then(() => {
          enqueueSnackbar('Funding data updated successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          fundingMutate();
          setSelectedFunding({});
          setSelectedDonorId('');
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the patient!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    } else {
      axiosService
        .post(`/patient/${patientId}/funding/`, values)
        .then(() => {
          enqueueSnackbar('Funding added successfully!!!', { variant: 'success' });
          setStatus({ success: false });
          setSubmitting(false);
          fundingMutate();
        })
        .catch((err) => {
          enqueueSnackbar('Something went wrong while adding the funding data!!!', { variant: 'error' });
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        });
    }
    setOpen(false);
  };
  // end of  handle edit delete and add

  if (fundingLoading) {
    return <div>Loading...</div>;
  }

  if (fundingError) {
    return <div>Error on Treatment</div>;
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
        rows={fundingData}
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
          {selectedFunding.id ? 'Update Treatment Data' : 'Add Treatment Data'}
        </BootstrapDialogTitle>
        <Formik
          enableReinitialize={true}
          initialValues={{
            patient: patientId,
            donor: selectedDonorId || '',
            funding_amount: selectedFunding?.funding_amount || ''
          }}
          validationSchema={Yup.object().shape({
            funding_amount: Yup.number().required('Funding amount is required')
          })}
          onSubmit={handleAddFunding}
        >
          {({ errors, handleChange, handleSubmit, isSubmitting, touched, values, handleBlur }) => (
            <Form noValidate>
              <DialogContent dividers>
                <Grid container spacing={3}>
                  {/* donor info */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="donor">Donor*</InputLabel>
                      <Select
                        fullWidth
                        labelId="donor"
                        id="donor"
                        value={values.donor}
                        name="donor"
                        onChange={handleChange}
                        // error={!!errors.donor}
                        // helperText={errors.donor}
                      >
                        {donorData.map((donorf) => (
                          <MenuItem key={donorf.id} value={donorf.id}>
                            {donorf.donor_name}
                          </MenuItem>
                        ))}
                      </Select>
                    </Stack>
                  </Grid>
                  {/* end of hospital info */}
                  {/* donate  */}
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="funding_amount">Funding Amount*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        id="funding_amount"
                        type="number"
                        value={values.funding_amount}
                        name="funding_amount"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Enter funding_amount name"
                        error={Boolean(touched.funding_amount && errors.funding_amount)}
                      />
                      {touched.funding_amount && errors.funding_amount && (
                        <FormHelperText error id="standard-weight-helper-text-funding_amount">
                          {errors.funding_amount}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  {/* end of donate */}
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                  {selectedFunding.id ? 'Update' : 'Save'}
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
