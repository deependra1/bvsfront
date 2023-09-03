// import React, { useState } from 'react';
import {
  // FormControlLabel,
  Grid,
  InputLabel,
  // MenuItem,
  // Radio,
  // RadioGroup,
  // Select,
  Stack,
  TextField
} from '../../../node_modules/@mui/material/index';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';

const PersonalInfo = ({ errors, values, handleChange }) => {
  // const [dobValue, setDobValue] = useState(dayjs('2023-04-18'));
  // values.dob = dobValue;
  return (
    <>
      {/* first name */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="fname">First Name*</InputLabel>
          <TextField fullWidth error={!!errors.fname} name="fname" value={values.fname} helperText={errors.fname} onChange={handleChange} />
        </Stack>
      </Grid>
      {/* end of first name */}

      {/* middle name */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="mname">Middle Name*</InputLabel>
          <TextField fullWidth error={!!errors.mname} name="mname" value={values.mname} helperText={errors.mname} onChange={handleChange} />
        </Stack>
      </Grid>
      {/* end of first name */}

      {/* last name */}
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lname">Last Name*</InputLabel>
          <TextField fullWidth error={!!errors.lname} name="lname" value={values.lname} helperText={errors.lname} onChange={handleChange} />
        </Stack>
      </Grid>
      {/* end of first name */}

      {/* countries 
      <Grid item xs={12} md={2}>
        <Stack spacing={1}>
          <InputLabel htmlFor="countries">Country*</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={values.country} name="country" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of countries name */}

      {/* provence 
      <Grid item xs={12} md={2}>
        <Stack spacing={1}>
          <InputLabel htmlFor="provence">Provence*</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.provence}
            name="provence"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of provence name */}

      {/* district 
      <Grid item xs={12} md={2}>
        <Stack spacing={1}>
          <InputLabel htmlFor="district">district*</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.district}
            name="district"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of district name */}

      {/* local 
      <Grid item xs={12} md={2}>
        <Stack spacing={1}>
          <InputLabel htmlFor="local">local*</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={values.local} name="local" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of local name */}

      {/* ward 
      <Grid item xs={12} md={1}>
        <Stack spacing={1}>
          <InputLabel htmlFor="ward">ward*</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={values.ward} name="ward" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of ward name */}

      {/* tole 
      <Grid item xs={12} md={3}>
        <Stack spacing={1}>
          <InputLabel htmlFor="tole">tole*</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={values.tole} name="tole" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of tole name */}

      {/* dob 
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="dob">Date of Birth*</InputLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker value={dobValue} onChange={(newValue) => setDobValue(newValue)} />
          </LocalizationProvider>
        </Stack>
      </Grid>
      {/* end of dob */}

      {/* Age 
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="middlename">Age at Incident</InputLabel>
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
      {/* end of Age */}

      {/* gender 
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

      {/* Citizenship 
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="firstname">Citizenship No*</InputLabel>
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
      {/* end of Citizenship */}

      {/* contact 
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="middlename">Patient Contact</InputLabel>
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
      {/* end of contact */}

      {/* parent contact 
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="lastname">Patient Parents Contacts</InputLabel>
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
      {/* end of parent contact */}

      {/* occupation 
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="occupation">Patient Occupation</InputLabel>
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value={values.country} name="country" onChange={handleChange}>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of occupation */}

      {/* s occupation 
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="provence">Suppose Occupation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.provence}
            name="provence"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of s occupation */}

      {/* p occup 
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <InputLabel htmlFor="district">Parents Occupation</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={values.district}
            name="district"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Stack>
      </Grid>
      {/* end of p occup */}
    </>
  );
};

export default PersonalInfo;
