// import React, { useState } from 'react';
import {
  //   FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  //   Radio,
  //   RadioGroup,
  Select,
  Stack
} from '../../../node_modules/@mui/material/index';

const InitialEntry = ({ errors, values, handleChange }) => {
  // const [regValue, setRegValue] = useState('BVS-1-10');

  const generateRegNo = (fiscalYear) => {
    // Assuming fiscalYear is in the format YYYY
    const lastTwoDigits = fiscalYear.slice(-2);
    const randomDigits = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0');
    return `REG-${lastTwoDigits}-${randomDigits}`;
  };

  values.regno = generateRegNo(values.fiscalyear);
  return (
    <>
      {/* Fiscal Year */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="fiscalyear">Fiscal Year</InputLabel>
          <Select labelId="fiscalyear" id="fiscalyear" value={values.fiscalyear} name="fiscalyear" onChange={handleChange}>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
            <MenuItem value="2022">2022</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of Fiscal Year */}

      {/* number Registration */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="regno">Registration Number</InputLabel>
          <OutlinedInput
            fullWidth
            error={!!errors.regno}
            name="regno"
            label="First Name"
            value={values.regno}
            helperText={errors.regno}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      {/* end of number Registration */}
    </>
  );
};

export default InitialEntry;
