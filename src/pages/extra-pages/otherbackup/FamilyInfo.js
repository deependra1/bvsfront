import React from 'react';
import {
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Stack
} from '../../../node_modules/@mui/material/index';

const FamilyInfo = ({ errors, values, handleChange }) => {
  return (
    <>
      {/* family type */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="tole">Family Type</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={values.tole} name="tole" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of family type */}

      {/* material Status */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Material Status</InputLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="gender"
            values={values.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Married" />
            <FormControlLabel value="male" control={<Radio />} label="Unmarried" />
          </RadioGroup>
        </Stack>
      </Grid>
      {/* end of gender */}

      {/* number of child */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Number of Child</InputLabel>
          <OutlinedInput
            fullWidth
            error={!!errors.lastname}
            name="lastname"
            label="First Name"
            value={values.lastname}
            helperText={errors.lastname}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      {/* end of number of child */}

      {/* number of Siblings */}
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Number of Siblings</InputLabel>
          <OutlinedInput
            fullWidth
            error={!!errors.lastname}
            name="lastname"
            label="First Name"
            value={values.lastname}
            helperText={errors.lastname}
            onChange={handleChange}
          />
        </Stack>
      </Grid>
      {/* end of number of Siblings */}
    </>
  );
};

export default FamilyInfo;
