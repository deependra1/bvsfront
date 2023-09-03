import React from 'react';
import { useState } from 'react';
import { Formik } from 'formik';
import {
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio
} from '../../../node_modules/@mui/material/index';
import AnimateButton from 'components/@extended/AnimateButton';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

import * as Yup from 'yup';

function PatitentForm() {
  const [value, setValue] = useState(dayjs('2022-04-17'));
  return (
    <>
      <Formik
        initialValues={{
          firstname: '',
          middlename: '',
          lastname: '',
          dob: value,
          gender: '',
          submit: 'hello'
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          middlename: Yup.string().max(255).required('Middle Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setStatus({ success: false });
            setSubmitting(false);
            console.log(values);
            alert(JSON.stringify(values, null, 2));
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              {/* fist name */}
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname">First Name*</InputLabel>
                  <OutlinedInput
                    id="firstname"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.firstname && errors.firstname)}
                  />
                  {touched.firstname && errors.firstname && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {/* end of first name */}

              {/* middle name */}
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="middlename">Middle Name*</InputLabel>
                  <OutlinedInput
                    id="middlename"
                    type="middlename"
                    value={values.middlename}
                    name="middlename"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.middlename && errors.middlename)}
                  />
                  {touched.middlename && errors.middlename && (
                    <FormHelperText error id="helper-text-middlename-signup">
                      {errors.middlename}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {/* end of middle name */}

              {/* middle name */}
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname">Last Name*</InputLabel>
                  <OutlinedInput
                    id="lastname"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.lastname && errors.lastname)}
                  />
                  {touched.lastname && errors.lastname && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.lastname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {/* end of middle name */}

              {/* dob */}
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname">Date of Birth*</InputLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              {/* end of dob */}

              {/* gender */}
              <Grid item xs={12} md={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname">Gender*</InputLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    values={values.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </Stack>
              </Grid>
              {/* end of gender */}

              {/* submit */}
              <Grid item xs={12}>
                <AnimateButton>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Create Account
                  </Button>
                </AnimateButton>
              </Grid>
              {/* end submit */}
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
}

export default PatitentForm;
