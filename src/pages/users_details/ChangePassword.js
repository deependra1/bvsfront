import React from 'react';

// material-ui
import { Button, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';
import { useSnackbar } from 'notistack';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { getUser, useUserActions } from 'hooks/user.actions';
import MainCard from 'components/MainCard';
import axiosService from 'helpers/axios';

const ChangePassword = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const userActions = useUserActions();
  const selectedUser = getUser();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  console.log(selectedUser);
  return (
    <MainCard title="Change Password">
      <Formik
        initialValues={{
          old_password: '',
          new_password: '',
          retype_password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          old_password: Yup.string().max(255).required('Password is required'),
          new_password: Yup.string().max(255).required('Password is required'),
          retype_password: Yup.string()
            .max(255)
            .label('confirm password')
            .required()
            .oneOf([Yup.ref('new_password'), null], 'Passwords must match')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          axiosService
            .put(`/auth/password-change/${selectedUser.id}/`, values)
            .then(() => {
              enqueueSnackbar('Password changes successfully!!!', { variant: 'success' });
              setStatus({ success: false });
              setSubmitting(false);
              userActions.logout();
            })
            .catch((err) => {
              enqueueSnackbar('Something went wrong while adding !!', { variant: 'error' });
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            });
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="old_password">Old Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.old_password && errors.old_password)}
                    id="-old_password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.old_password}
                    name="old_password"
                    onBlur={handleBlur}
                    onChange={handleChange}
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
                    placeholder="Enter old password"
                  />
                  {touched.old_password && errors.old_password && (
                    <FormHelperText error id="standard-weight-helper-text-old_password">
                      {errors.old_password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="new_password">New Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.new_password && errors.new_password)}
                    id="-new_password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.new_password}
                    name="new_password"
                    onBlur={handleBlur}
                    onChange={handleChange}
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
                    placeholder="Enter new password"
                  />
                  {touched.new_password && errors.new_password && (
                    <FormHelperText error id="standard-weight-helper-text-new_password">
                      {errors.new_password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="retype_password">Retype Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.retype_password && errors.retype_password)}
                    id="-retype_password"
                    type={showPassword ? 'text' : 'password'}
                    value={values.retype_password}
                    name="retype_password"
                    onBlur={handleBlur}
                    onChange={handleChange}
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
                    placeholder="Retype password"
                  />
                  {touched.retype_password && errors.retype_password && (
                    <FormHelperText error id="standard-weight-helper-text-retype_password">
                      {errors.retype_password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Change Password
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </MainCard>
  );
};

export default ChangePassword;
