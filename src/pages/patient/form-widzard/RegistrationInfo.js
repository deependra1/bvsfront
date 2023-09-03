import { Grid, InputLabel, Stack, Select, MenuItem } from '@mui/material';
import FormHelperText from '@mui/material/FormHelperText';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import dayjs from 'dayjs';

const today = dayjs();
const PersonalInfo = ({ errors, values, handleChange, handleBlur, touched }) => {
  const [registration_date, setRegistration_date] = useState(today);
  const [fiscal_year, setFiscal_year] = useState(today);
  values.registration_date = registration_date;
  values.fiscal_year = fiscal_year;
  return (
    <>
      <Grid container spacing={3}>
        {/* reg date */}
        <Grid item xs={12} md={4}>
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
              {errors.registration_date && (
                <FormHelperText error id="standard-weight-helper-text-registration_date">
                  {errors.registration_date}
                </FormHelperText>
              )}
            </LocalizationProvider>
          </Stack>
        </Grid>
        {/* end of reg date */}

        {/* Fiscal Year */}
        <Grid item xs={12} md={4}>
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
              {errors.fiscal_year && (
                <FormHelperText error id="standard-weight-helper-text-fiscal_year">
                  {errors.fiscal_year}
                </FormHelperText>
              )}
            </LocalizationProvider>
          </Stack>
        </Grid>
        {/* end of Fiscal Year */}

        {/* reg Loc */}
        <Grid item xs={12} md={4}>
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
            {errors.registration_location && (
              <FormHelperText error id="standard-weight-helper-text-registration_location">
                {errors.registration_location}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* Reg loc */}
      </Grid>
    </>
  );
};

export default PersonalInfo;
