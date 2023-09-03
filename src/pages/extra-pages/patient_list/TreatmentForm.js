import React, { useState } from 'react';
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack, TextField, Divider, Typography } from '@mui/material';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const today = dayjs();
const TreatmentForm = ({ onSubmit, onClose, pid, treat }) => {
  const [hospitalized_date, setHospitalized_date] = useState(today);
  const [dischared_date, setDischared_date] = useState(today);
  const [expired_date, setExpired_date] = useState(null);
  // values.hospitalized_date = hospitalized_date;
  const initialValues = {
    patient: pid,
    hospitalized_date: treat?.hospitalized_date || hospitalized_date,
    hospital: treat?.hospital || '',
    doctor_name: treat?.doctor_name || '',
    dischared_date: treat?.dischared_date || dischared_date,
    expired_date: treat?.expired_date || expired_date,
    current_status: treat?.current_status || ''
  };
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={Yup.object().shape({
        hospital: Yup.string().required('Hospital is required')
      })}
      onSubmit={onSubmit}
    >
      {({ errors, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form noValidate>
          <Grid container spacing={3}>
            {/* doa */}
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="dob">Hospitalized Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="hospitalized_date"
                    // views={['year', 'month', 'day']}
                    value={values.hospitalized_date}
                    // onBlur={handleBlur}
                    onChange={(newValue) => setHospitalized_date(newValue)}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>
            {/* end of doa */}
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="hospital">Hospital</InputLabel>
                <OutlinedInput
                  id="hospital"
                  // type="hospital"
                  value={values.hospital}
                  name="hospital"
                  // onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter hospital name"
                  fullWidth
                  error={Boolean(touched.hospital && errors.hospital)}
                />
                {touched.hospital && errors.hospital && (
                  <FormHelperText error id="standard-weight-helper-text-hospital">
                    {errors.hospital}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            {/* doctor info */}
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="doctor_name">Doctor Name</InputLabel>
                <TextField
                  fullWidth
                  name="doctor_name"
                  value={values.doctor_name}
                  helperText={errors.doctor_name}
                  onChange={handleChange}
                  error={!!errors.doctor_name}
                />
              </Stack>
            </Grid>
            {/* end of doctor info*/}

            {/* dischared date */}
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="lastname">Dischared Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="dischared_date"
                    // views={['year', 'month', 'day']}
                    value={values.dischared_date}
                    // onBlur={handleBlur}
                    onChange={(newValue) => setDischared_date(newValue)}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>
            {/* end of dischared date*/}

            {/* death date */}
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="lastname">Expired Date</InputLabel>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    name="expired_date"
                    // views={['year', 'month', 'day']}
                    value={values.expired_date}
                    // onBlur={handleBlur}
                    onChange={(newValue) => setExpired_date(newValue)}
                  />
                </LocalizationProvider>
              </Stack>
            </Grid>
            {/* end of death date */}

            {/* current status */}
            <Grid item xs={12} md={4}>
              <Stack spacing={1}>
                <InputLabel htmlFor="current_status">Current Status</InputLabel>
                <TextField
                  fullWidth
                  error={!!errors.current_status}
                  name="current_status"
                  value={values.current_status}
                  helperText={errors.current_status}
                  onChange={handleChange}
                />
              </Stack>
            </Grid>
            {/* end of current status */}
          </Grid>

          {/* Buttom section */}

          <Grid item xs={12}>
            <Divider>
              <Typography variant="caption"> o </Typography>
            </Divider>

            <Stack spacing={1} direction="row">
              <Button variant="outlined" disableElevation disabled={isSubmitting} onClick={handleSubmit} color="primary">
                {treat ? 'Update' : 'Save'}
              </Button>
              <Button variant="outlined" onClick={onClose} autoFocus color="error">
                Close
              </Button>
            </Stack>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default TreatmentForm;
