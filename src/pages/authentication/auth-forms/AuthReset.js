import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { Button, FormHelperText, Grid, Link, IconButton, InputAdornment, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useParams } from 'react-router-dom';
import { useNavigate } from '../../../../node_modules/react-router-dom/dist/index';

const AuthReset = () => {
  const { uId, uToken } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Formik
        initialValues={{
          uid: uId,
          token: uToken,
          new_password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          new_password: Yup.string().max(255).required('Password is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          // alert('clicked');
          // alert(JSON.stringify(values));
          axios
            .post(`http://bvsnepal.org/api/auth/forgot-password/password_reset_confirm/`, values)
            .then(() => {
              enqueueSnackbar('Password reset successfully!!!', { variant: 'success' });
              setStatus({ success: false });
              setSubmitting(false);
              navigate('/login');
            })
            .catch((err) => {
              enqueueSnackbar('Something went wrong !!!', { variant: 'error' });
              setStatus({ success: false });
              setErrors({ submit: err.request.response });
              setSubmitting(false);
            });
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-login">New Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="-password-login"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
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
                    placeholder="Enter password"
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="standard-weight-helper-text-password-login">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} sx={{ mt: -1 }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                  <div></div>
                  <Link variant="h6" component={RouterLink} to="/login" color="text.primary">
                    Back to login
                  </Link>
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
                    Reset
                  </Button>
                </AnimateButton>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthReset;
