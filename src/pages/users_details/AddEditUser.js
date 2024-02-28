import { useEffect, useState } from 'react';
import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import useSWR from 'swr';
import axiosService, { fetcher } from 'helpers/axios';
import { useSnackbar } from 'notistack';

// material-ui
import { Box, FormControl, FormHelperText, InputAdornment, InputLabel, OutlinedInput, Stack, Select, MenuItem } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useUserActions } from 'hooks/user.actions';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

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
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const userActions = useUserActions();
  // const [selectedUser, setSelectedUser] = React.useState({});

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

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

  const handleDelete = (id) => {
    if (confirm('Are you sure to delete user?')) {
      axiosService
        .delete(`/user/${id}/`)
        .then(() => {
          enqueueSnackbar('User deleted successfully!!!', { variant: 'success' });
          userMutate();
        })
        .catch(() => {
          enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
        });
    }
  };

  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      userActions.register(values).catch((err) => {
        if (err.message) {
          setErrors({ submit: err.request.response });
          console.log(err.detail);
          setOpen(true);
        }
      });
      userMutate();
      enqueueSnackbar('User added successfully!!!', { variant: 'success' });
      setStatus({ success: false });
      setSubmitting(false);
      setOpen(false);
    } catch (err) {
      console.error(err);
      setStatus({ success: false });
      setErrors({ submit: err.message });
      setSubmitting(false);
    }
  };

  if (userLoading) {
    return <div>Loading...</div>;
  }

  if (userError) {
    return <div>Error on Users</div>;
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h3" gutterBottom>
            Users Detail
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={2}>
          <Button variant="outlined" onClick={handleClickOpen}>
            Add User
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
              pageSize: 10
            }
          }
        }}
        pageSizeOptions={[10]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
      {/* end of data grid */}
      <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Add User Data
        </BootstrapDialogTitle>
        <Formik
          initialValues={{
            first_name: '',
            last_name: '',
            username: '',
            email: '',
            location: '',
            type: '',
            password: '',
            submit: null
          }}
          validationSchema={Yup.object().shape({
            first_name: Yup.string().max(255).required('First Name is required'),
            last_name: Yup.string().max(255).required('Last Name is required'),
            email: Yup.string().email('Must be a valid email').max(255).required('Email is required')
            // password: Yup.string().max(255).required('Password is required')
          })}
          onSubmit={handleSubmit}
        >
          {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
            <DialogContent dividers>
              <form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
                      <OutlinedInput
                        id="firstname-login"
                        type="firstname"
                        value={values.first_name}
                        name="first_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="John"
                        fullWidth
                        error={Boolean(touched.first_name && errors.first_name)}
                      />
                      {touched.firstname && errors.firstname && (
                        <FormHelperText error id="helper-text-first_name-signup">
                          {errors.first_name}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.last_name && errors.last_name)}
                        id="lastname-signup"
                        type="last_name"
                        value={values.last_name}
                        name="last_name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Doe"
                        inputProps={{}}
                      />
                      {touched.last_name && errors.last_name && (
                        <FormHelperText error id="helper-text-lastname-signup">
                          {errors.last_name}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="username">User Name</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.username && errors.username)}
                        id="username"
                        value={values.username}
                        name="username"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="Demo Inc."
                        inputProps={{}}
                      />
                      {touched.username && errors.username && (
                        <FormHelperText error id="helper-text-username-signup">
                          {errors.username}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                        id="email-login"
                        type="email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        placeholder="demo@company.com"
                        inputProps={{}}
                      />
                      {touched.email && errors.email && (
                        <FormHelperText error id="helper-text-email-signup">
                          {errors.email}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="type">Type</InputLabel>
                      <Select
                        labelId="type"
                        id="type"
                        value={values.type}
                        name="type"
                        onChange={handleChange}
                        error={Boolean(touched.type && errors.type)}
                      >
                        <MenuItem value="admin">Admin</MenuItem>
                        <MenuItem value="strd">Standard</MenuItem>
                        <MenuItem value="acc">Account</MenuItem>
                      </Select>
                      {touched.type && errors.type && (
                        <FormHelperText error id="helper-text-type">
                          {errors.type}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="location">Branch</InputLabel>
                      <Select
                        labelId="location"
                        id="location"
                        value={values.location}
                        name="location"
                        onChange={handleChange}
                        error={Boolean(touched.location && errors.location)}
                      >
                        <MenuItem value="KTM">Kathmandu</MenuItem>
                        <MenuItem value="NPG">Nepalgunj</MenuItem>
                        <MenuItem value="JNP">Janakpur</MenuItem>
                      </Select>
                      {touched.location && errors.location && (
                        <FormHelperText error id="helper-text-location">
                          {errors.location}
                        </FormHelperText>
                      )}
                    </Stack>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="password-signup">Password</InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        id="password-signup"
                        type={showPassword ? 'text' : 'password'}
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={(e) => {
                          handleChange(e);
                          changePassword(e.target.value);
                        }}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              size="large"
                            >
                              {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                            </IconButton>
                          </InputAdornment>
                        }
                        placeholder="******"
                        inputProps={{}}
                      />
                      {touched.password && errors.password && (
                        <FormHelperText error id="helper-text-password-signup">
                          {errors.password}
                        </FormHelperText>
                      )}
                    </Stack>
                    <FormControl fullWidth sx={{ mt: 2 }}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                        </Grid>
                        <Grid item>
                          <Typography variant="subtitle1" fontSize="0.75rem">
                            {level?.label}
                          </Typography>
                        </Grid>
                      </Grid>
                    </FormControl>
                  </Grid>

                  {errors.submit && (
                    <Grid item xs={12}>
                      <FormHelperText error>{errors.submit}</FormHelperText>
                    </Grid>
                  )}
                </Grid>
                <DialogActions>
                  <Button autoFocus variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                    Create
                  </Button>
                  <Button autoFocus variant="outlined" color="error" onClick={handleClose}>
                    Cancel
                  </Button>
                </DialogActions>
              </form>
            </DialogContent>
          )}
        </Formik>
      </BootstrapDialog>
    </div>
  );
}
