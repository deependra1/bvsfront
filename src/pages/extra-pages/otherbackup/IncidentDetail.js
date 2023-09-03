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

const IncidentDetail = ({ errors, values, handleChange }) => {
  const [dobValue, setDobValue] = useState(dayjs('2023-04-18'));
  values.dob = dobValue;
  return (
    <>
      {/* dot */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="dob">Date of Incident*</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={dobValue} onChange={(newValue) => setDobValue(newValue)} />
          </LocalizationProvider>
        </Stack>
      </Grid>
      {/* end of dot */}

      {/* Area of burn */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="firstname">Area of Burn</InputLabel>
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
      {/* end of Area of burn */}

      {/* percentage of burn */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="middlename">Percentage of Burn</InputLabel>
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
      {/* end of percentage of burn */}

      {/* degree of burn */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Degree of Burn</InputLabel>
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
      {/* end of degree of burn */}

      {/* Cause of burn */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Cause of Burn</InputLabel>
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
      {/* end of Cause of burn */}

      {/* Type of burn */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Type of Burn</InputLabel>
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
      {/* end of Type of burn */}

      {/* Place of burn */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Place of Incident</InputLabel>
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
      {/* end of Place of burn */}

      {/* description */}
      <Grid item xs={12}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Brief Description of Incident</InputLabel>
          <TextField
            fullWidth
            multiline
            rows={4}
            error={!!errors.lastname}
            name="lastname"
            value={values.lastname}
            helperText={errors.lastname}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      {/* end of description */}
    </>
  );
};

export default IncidentDetail;
