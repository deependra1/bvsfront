import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import useSWR from 'swr';
import axiosService, { fetcher } from 'helpers/axios';
import { useSnackbar } from 'notistack';
// import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import AuthRegister from 'pages/authentication/auth-forms/AuthRegister';

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

export default function AddEditUser() {
  const [open, setOpen] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [selectedTreatment, setSelectedTreatment] = React.useState({});

  // fetching user data
  const {
    data: userData,
    error: userError,
    isLoading: userLoading,
    mutate: userMutate
  } = useSWR(`/user/`, fetcher, { revalidateOnMount: true });
  // end of fetching

  // DataGrid column initalization
  const columns = [
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      editable: true
    },
    {
      field: 'username',
      headerName: 'Username',
      width: 100,
      editable: true
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 100,
      editable: true
    },
    {
      field: 'location',
      headerName: 'Branch',
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
  const handleEdit = (user) => {
    setSelectedTreatment(user.row);
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete treatment data?')) {
      axiosService
        .delete(`/user/${id}/`)
        .then(() => {
          enqueueSnackbar('Patient Deleted successfully!!!', { variant: 'success' });
          userMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  // const handleAddTreatment = (values, { setErrors, setStatus, setSubmitting }) => {
  //   if (selectedTreatment.id) {
  //     axiosService
  //       .put(`/patient/${patientId}/treatment/${selectedTreatment.id}/`, values)
  //       .then(() => {
  //         enqueueSnackbar('Patient updated successfully!!!', { variant: 'success' });
  //         setStatus({ success: false });
  //         setSubmitting(false);
  //         treatmentMutate();
  //         setSelectedTreatment({});
  //       })
  //       .catch((err) => {
  //         enqueueSnackbar('Something went wrong while adding the patient!!!', { variant: 'error' });
  //         setStatus({ success: false });
  //         setErrors({ submit: err.message });
  //         setSubmitting(false);
  //       });
  //   } else {
  //     axiosService
  //       .post(`/patient/${patientId}/treatment/`, values)
  //       .then(() => {
  //         enqueueSnackbar('Patient added successfully!!!', { variant: 'success' });
  //         setStatus({ success: false });
  //         setSubmitting(false);
  //         treatmentMutate();
  //       })
  //       .catch((err) => {
  //         enqueueSnackbar('Something went wrong while adding the patient!!!', { variant: 'error' });
  //         setStatus({ success: false });
  //         setErrors({ submit: err.message });
  //         setSubmitting(false);
  //       });
  //   }
  //   setOpen(false);
  // };
  // end of  handle edit delete and add

  if (userLoading) {
    return <div>Loading...</div>;
  }

  if (userError) {
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
        rows={userData}
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
          {selectedTreatment.id ? 'Update Treatment Data' : 'Add Treatment Data'}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <AuthRegister />
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
