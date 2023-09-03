import * as React from 'react';
import { Grid, InputLabel, MenuItem, Select, Stack, Button } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AnimateButton from 'components/@extended/AnimateButton';
import { useState } from 'react';
import axiosService from 'helpers/axios';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const today = dayjs();
const PatientRegistrationForm = () => {
  const [registration_date, setRegistration_date] = useState(today);
  const [fiscal_year, setFiscal_year] = useState(today);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          registration_date: registration_date,
          fiscal_year: fiscal_year,
          registration_location: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          registration_location: Yup.string().max(255).required('Reg loc is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            let { registration_date, fiscal_year } = values;
            registration_date = dayjs(values.registration_date).format('YYYY-MM-DD');
            fiscal_year = dayjs(values.fiscal_year).format('YYYY');
            const data = { registration_date, fiscal_year, registration_location: values.registration_location };

            axiosService
              .post('/registration/', data)
              .then((response) => {
                enqueueSnackbar('Patient registered successfully!!!', { variant: 'success' });
                navigate('/patient/');
                console.log(response.data.id);
              })
              .catch((err) => {
                console.log(err);
                enqueueSnackbar('Something went wrong while registering the patient!!!', { variant: 'error' });
              });
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* reg date */}
              <Grid item xs={12} md={3}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="registration_date">Registration Date*</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      name="registration_date"
                      views={['year', 'month', 'day']}
                      value={values.registration_date}
                      onBlur={handleBlur}
                      onChange={(newValue) => setRegistration_date(newValue)}
                      error={Boolean(touched.registration_date && errors.registration_date)}
                    />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              {/* end of reg date */}

              {/* Fiscal Year */}
              <Grid item xs={12} md={3}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="fiscal_year">Fiscal Year*</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      name="fiscal_year"
                      views={['year']}
                      value={values.fiscal_year}
                      onBlur={handleBlur}
                      onChange={(newValue) => setFiscal_year(newValue)}
                      error={Boolean(touched.fiscal_year && errors.fiscal_year)}
                    />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              {/* end of Fiscal Year */}

              {/* reg Loc */}
              <Grid item xs={12} md={3}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="registration_location">Registered From*</InputLabel>
                  <Select
                    labelId="registration_location"
                    id="registration_location"
                    name="registration_location"
                    value={values.registration_location}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    error={Boolean(touched.registration_location && errors.registration_location)}
                  >
                    <MenuItem value="KTM">Kathmandu</MenuItem>
                    <MenuItem value="JNP">Janakpur</MenuItem>
                    <MenuItem value="NPG">Nepalgung</MenuItem>
                  </Select>
                </Stack>
              </Grid>
              {/* Reg loc */}
              <Grid item xs={12} md={3}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="registration_location">.</InputLabel>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="primary"
                    >
                      Next
                    </Button>
                  </AnimateButton>
                </Stack>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default PatientRegistrationForm;
