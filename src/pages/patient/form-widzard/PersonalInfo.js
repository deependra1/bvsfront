import { Grid, InputLabel, Stack, TextField, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import dayjs from 'dayjs';
import { useState } from 'react';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { Nepal } from 'utils/nepal__';
import { fetcher } from '../../../helpers/axios';
import useSWR from 'swr';

// const provinces = Object.keys(Nepal);

// const today = dayjs();
const PersonalInfo = ({ errors, values, handleChange, setFieldValue, handleBlur, touched }) => {
  // const [date_of_birth, setDate_of_birth] = useState(values.date_of_birth);

  const [selectedProvince, setSelectedProvince] = useState(values.provence);
  const [selectedDistrict, setSelectedDistrict] = useState(values.district);
  const [selectedMunicipality, setSelectedMunicipality] = useState(values.local);

  const {
    data: occupationData,
    error: occupationError,
    isLoading: occupationLoading
  } = useSWR(`/occupation/`, fetcher, { revalidateOnMount: true });

  const handleProvinceChange = (event) => {
    setSelectedProvince(event.target.value);
    setSelectedDistrict('');
    setSelectedMunicipality('');
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setSelectedMunicipality('');
  };

  const handleMunicipalityChange = (event) => {
    setSelectedMunicipality(event.target.value);
  };
  // values.date_of_birth = date_of_birth;
  values.provence = selectedProvince;
  values.district = selectedDistrict;
  values.local = selectedMunicipality;

  if (occupationLoading) {
    return <div>Loading...</div>;
  }

  if (occupationError) {
    return <div>Error on Data</div>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {/* first name */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="fname">First Name*</InputLabel>
            <TextField
              fullWidth
              name="fname"
              value={values.fname}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.fname && errors.fname)}
            />
            {errors.fname && (
              <FormHelperText error id="standard-weight-helper-text-fname">
                {errors.fname}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of first name */}
        {/* middle name */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="mname">Middle Name</InputLabel>
            <TextField fullWidth name="mname" value={values.mname} onChange={handleChange} error={Boolean(touched.mname && errors.mname)} />
            {errors.mname && (
              <FormHelperText error id="standard-weight-helper-text-mname">
                {errors.mname}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of middle name */}
        {/* last name */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="lname">Last Name*</InputLabel>
            <TextField
              fullWidth
              name="lname"
              value={values.lname}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.lname && errors.lname)}
            />
            {errors.lname && (
              <FormHelperText error id="standard-weight-helper-text-lname">
                {errors.lname}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of last name */}
      </Grid>

      <Grid container spacing={3} mt={1} mb={1}>
        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="Full Address Information" />
          </Divider>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* address main */}
        <Grid item xs={12}>
          {/* countries */}
          <Grid item xs={12} md={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="countries">Select Country*</InputLabel>
              <Select
                labelId="countries"
                id="countries"
                value={values.country}
                name="country"
                onChange={handleChange}
                error={Boolean(touched.country && errors.country)}
              >
                <MenuItem value="Nepal">Nepal</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </Stack>
          </Grid>
          {/* end of countries name */}
        </Grid>
        {/* end of address */}

        {/* provence */}
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <InputLabel htmlFor="provence">Provence*</InputLabel>
            <Select
              labelId="provence"
              id="provence"
              value={selectedProvince}
              name="provence"
              onChange={handleProvinceChange}
              error={Boolean(touched.provence && errors.provence)}
            >
              {Object.keys(Nepal).map((province) => (
                <MenuItem key={province} value={province}>
                  {province}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
        {/* end of provence name */}

        {/* district */}
        {selectedProvince && (
          <Grid item xs={12} md={2}>
            <Stack spacing={1}>
              <InputLabel htmlFor="district">district*</InputLabel>
              <Select
                labelId="district"
                id="district"
                value={selectedDistrict}
                name="district"
                onChange={handleDistrictChange}
                error={Boolean(touched.district && errors.district)}
              >
                <MenuItem value="">Select District</MenuItem>
                {Object.keys(Nepal[selectedProvince]).map((district) => (
                  <MenuItem key={district} value={district}>
                    {district}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}

        {/* end of district name */}

        {/* local */}
        {selectedDistrict && (
          <Grid item xs={12} md={4}>
            <Stack spacing={1}>
              <InputLabel htmlFor="local">local*</InputLabel>
              <Select
                labelId="local"
                id="local"
                value={selectedMunicipality}
                name="local"
                onChange={handleMunicipalityChange}
                error={Boolean(touched.local && errors.local)}
              >
                {Nepal[selectedProvince][selectedDistrict].map((municipality) => (
                  <MenuItem key={municipality} value={municipality}>
                    {municipality}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}

        {/* end of local name */}

        {/* ward */}
        {selectedMunicipality && (
          <Grid item xs={12} md={1}>
            <Stack spacing={1}>
              <InputLabel htmlFor="ward">ward*</InputLabel>
              <Select
                labelId="ward"
                id="ward"
                value={values.ward}
                name="ward"
                onChange={handleChange}
                error={Boolean(touched.ward && errors.ward)}
              >
                {[...Array(36)].map((x, i) => (
                  <MenuItem key={i} value={i}>
                    {i}
                  </MenuItem>
                ))}
              </Select>
            </Stack>
          </Grid>
        )}
        {/* end of ward name */}

        {/* tole */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="tole">Tole</InputLabel>
            <TextField fullWidth name="tole" value={values.tole} onChange={handleChange} error={Boolean(touched.tole && errors.tole)} />
          </Stack>
        </Grid>
        {/* end of tole name */}
      </Grid>

      <Grid container spacing={3} mt={1} mb={1}>
        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="Other Information" />
          </Divider>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* dob */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="dob">Date of Birth*</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date_of_birth"
                views={['year', 'month', 'day']}
                value={values.date_of_birth}
                onBlur={handleBlur}
                onChange={(newValue) => setFieldValue('date_of_birth', newValue, true)}
                error={Boolean(touched.date_of_birth && errors.date_of_birth)}
              />
            </LocalizationProvider>
          </Stack>
        </Grid>
        {/* end of dob */}

        {/* Age */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="age_at_incident">Age at Incident*</InputLabel>
            <TextField
              fullWidth
              type="number"
              name="age_at_incident"
              value={values.age_at_incident}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.age_at_incident && errors.age_at_incident)}
            />
          </Stack>
          {errors.age_at_incident && (
            <FormHelperText error id="standard-weight-helper-text-age_at_incident">
              {errors.age_at_incident}
            </FormHelperText>
          )}
        </Grid>
        {/* end of age_at_incident */}

        {/* gender */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="gender">Gender*</InputLabel>
            <RadioGroup
              row
              aria-labelledby="gender"
              defaultValue={values.gender}
              name="gender"
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.gender && errors.gender)}
            >
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
              <FormControlLabel value="Other" control={<Radio />} label="Other" />
            </RadioGroup>
            {errors.gender && (
              <FormHelperText error id="standard-weight-helper-text-gender">
                {errors.gender}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of gender */}

        {/* Citizenship */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="citizenship_no">Citizenship No*</InputLabel>
            <TextField
              fullWidth
              name="citizenship_no"
              value={values.citizenship_no}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.citizenship_no && errors.citizenship_no)}
            />
            {errors.citizenship_no && (
              <FormHelperText error id="standard-weight-helper-text-citizenship_no">
                {errors.citizenship_no}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of Citizenship */}

        {/* contact */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="patient_contact">Patient Contact</InputLabel>
            <TextField
              fullWidth
              name="patient_contact"
              value={values.patient_contact}
              onChange={handleChange}
              error={Boolean(touched.patient_contact && errors.patient_contact)}
            />
          </Stack>
        </Grid>
        {/* end of contact */}

        {/* parent contact */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="parents_contact">Patient Parents Contacts</InputLabel>
            <TextField
              fullWidth
              name="parents_contact"
              value={values.parents_contact}
              onChange={handleChange}
              error={Boolean(touched.parents_contact && errors.parents_contact)}
            />
          </Stack>
        </Grid>
        {/* end of parent contact */}

        {/* occupation */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="patient_occupation">Patient Occupation</InputLabel>
            <Select
              fullWidth
              labelId="patient_occupation"
              id="patient_occupation"
              value={values.patient_occupation}
              name="patient_occupation"
              onChange={handleChange}
              error={Boolean(touched.patient_occupation && errors.patient_occupation)}
            >
              {occupationData.map((occupation) => (
                <MenuItem key={occupation.id} value={occupation.id}>
                  {occupation.occupation_name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
        {/* end of occupation */}

        {/* s occupation */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="suppose_occupation">Suppose Occupation</InputLabel>
            <Select
              labelId="suppose_occupation"
              id="suppose_occupation"
              value={values.suppose_occupation}
              name="suppose_occupation"
              onChange={handleChange}
              error={Boolean(touched.suppose_occupation && errors.suppose_occupation)}
            >
              {occupationData.map((occupation) => (
                <MenuItem key={occupation.id} value={occupation.id}>
                  {occupation.occupation_name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
        {/* end of s occupation */}

        {/* p occup */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="parents_occupation">Parents Occupation</InputLabel>
            <Select
              labelId="parents_occupation"
              id="parents_occupation"
              value={values.parents_occupation}
              name="parents_occupation"
              onChange={handleChange}
              error={Boolean(touched.parents_occupation && errors.parents_occupation)}
            >
              {occupationData.map((occupation) => (
                <MenuItem key={occupation.id} value={occupation.id}>
                  {occupation.occupation_name}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Grid>
        {/* end of p occup */}
      </Grid>
    </>
  );
};

export default PersonalInfo;
