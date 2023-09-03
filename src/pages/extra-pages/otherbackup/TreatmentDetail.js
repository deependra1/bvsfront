import React, { useState } from 'react';
import {
  //   FormControlLabel,
  Grid,
  InputLabel,
  //   MenuItem,
  //   Radio,
  //   RadioGroup,
  //   Select,
  Stack,
  TextField
} from '../../../node_modules/@mui/material/index';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const TreatmentDetail = ({ errors, values, handleChange }) => {
  const [dobValue, setDobValue] = useState(dayjs('2023-04-18'));
  values.dob = dobValue;
  return (
    <>
      {/* doa */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="dob">Hospitalized Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={dobValue} onChange={(newValue) => setDobValue(newValue)} />
          </LocalizationProvider>
        </Stack>
      </Grid>
      {/* end of doa */}

      {/* Hospital */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="firstname">Hospital Name</InputLabel>
          <TextField
            fullWidth
            error={!!errors.firstname}
            name="firstname"
            value={values.firstname}
            helperText={errors.firstname}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      {/* end of Hospital */}

      {/* doctor info */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="middlename">Doctor Name</InputLabel>
          <TextField
            fullWidth
            error={!!errors.middlename}
            name="middlename"
            value={values.middlename}
            helperText={errors.middlename}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      {/* end of doctor info*/}

      {/* dischared date */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Dischared Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={dobValue} onChange={(newValue) => setDobValue(newValue)} />
          </LocalizationProvider>
        </Stack>
      </Grid>
      {/* end of dischared date*/}

      {/* death date */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Expired Date</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={dobValue} onChange={(newValue) => setDobValue(newValue)} />
          </LocalizationProvider>
        </Stack>
      </Grid>
      {/* end of death date */}

      {/* current status */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Current Status</InputLabel>
          <TextField
            fullWidth
            error={!!errors.lastname}
            name="lastname"
            value={values.lastname}
            helperText={errors.lastname}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      {/* end of current status */}
    </>
  );
};

export default TreatmentDetail;
