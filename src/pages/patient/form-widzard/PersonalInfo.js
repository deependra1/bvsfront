// import React, { useState } from 'react';
import { Grid, InputLabel, Stack, TextField, Select, MenuItem, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { fetcher } from '../../../helpers/axios';
import useSWR from 'swr';

const PersonalInfo = ({ errors, values, handleChange, setFieldValue, handleBlur, touched }) => {
  const {
    data: occupationData,
    error: occupationError,
    isLoading: occupationLoading
  } = useSWR(`/occupation/`, fetcher, { revalidateOnMount: true });

  const { data: ethnicData, error: ethnicError, isLoading: ethnicLoading } = useSWR(`/ethnic/`, fetcher, { revalidateOnMount: true });

  const {
    data: religionData,
    error: religionError,
    isLoading: religionLoading
  } = useSWR(`/religion/`, fetcher, { revalidateOnMount: true });

  const {
    data: educationData,
    error: educationError,
    isLoading: educationLoading
  } = useSWR(`/educationlevel/`, fetcher, { revalidateOnMount: true });

  const {
    data: languageData,
    error: languageError,
    isLoading: languageLoading
  } = useSWR(`/language/`, fetcher, { revalidateOnMount: true });

  if (occupationLoading || ethnicLoading || religionLoading || educationLoading || languageLoading) {
    return <div>Loading...</div>;
  }

  if (occupationError || ethnicError || religionError || educationError || languageError) {
    return <div>Error on Data</div>;
  }

  return (
    <>
      <Grid container spacing={3}>
        {/* first name */}
        <Grid item xs={12} md={3}>
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
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="mname">Middle Name</InputLabel>
            <TextField fullWidth name="mname" value={values.mname} onChange={handleChange} onBlur={handleBlur} />
          </Stack>
        </Grid>
        {/* end of middle name */}

        {/* last name */}
        <Grid item xs={12} md={3}>
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

        {/* dob */}
        <Grid item xs={12} md={3}>
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
              {errors.date_of_birth && (
                <FormHelperText error id="standard-weight-helper-text-date_of_birth">
                  {errors.date_of_birth}
                </FormHelperText>
              )}
            </LocalizationProvider>
          </Stack>
        </Grid>
        {/* end of dob */}

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

        {/* Age */}
        <Grid item xs={12} md={2}>
          <Stack spacing={1} row>
            <InputLabel htmlFor="age_at_incident">Age</InputLabel>
            <TextField
              fullWidth
              type="number"
              name="age_at_incident"
              placeholder="YY"
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

        {/* month */}
        <Grid item xs={12} md={2}>
          <Stack spacing={1} row>
            <InputLabel htmlFor="month_at_incident">&nbsp;</InputLabel>
            <TextField
              fullWidth
              type="number"
              name="month_at_incident"
              placeholder="MM"
              value={values.month_at_incident}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.month_at_incident && errors.month_at_incident)}
            />
          </Stack>
          {errors.month_at_incident && (
            <FormHelperText error id="standard-weight-helper-text-month_at_incident">
              {errors.month_at_incident}
            </FormHelperText>
          )}
        </Grid>
        {/* end of month*/}

        {/* month */}
        <Grid item xs={12} md={2}>
          <Stack spacing={1} row>
            <InputLabel htmlFor="day_at_incident">&nbsp;</InputLabel>
            <TextField
              fullWidth
              type="number"
              name="day_at_incident"
              placeholder="DD"
              value={values.day_at_incident}
              onBlur={handleBlur}
              onChange={handleChange}
              error={Boolean(touched.day_at_incident && errors.day_at_incident)}
            />
          </Stack>
          {errors.day_at_incident && (
            <FormHelperText error id="standard-weight-helper-text-day_at_incident">
              {errors.day_at_incident}
            </FormHelperText>
          )}
        </Grid>
        {/* end of month*/}

        {/* age group */}
        <Grid item xs={12} md={2}>
          <Stack spacing={1}>
            <InputLabel htmlFor="age_group">Age Group</InputLabel>
            <Select
              fullWidth
              labelId="age_group"
              id="age_group"
              value={values.age_group}
              name="age_group"
              onChange={handleChange}
              error={Boolean(touched.age_group && errors.age_group)}
            >
              <MenuItem key="" value="0 to 5">
                0 to 5
              </MenuItem>
              <MenuItem key="" value=" 6 to 11">
                6 to 11
              </MenuItem>
              <MenuItem key="" value="12 to 17">
                12 to 17
              </MenuItem>
              <MenuItem key="" value="18 to 59">
                18 to 59
              </MenuItem>
              <MenuItem key="" value="60 above">
                60 above
              </MenuItem>
            </Select>
            {errors.age_group && (
              <FormHelperText error id="standard-weight-helper-text-age_group">
                {errors.age_group}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of occupation */}

        {/* Citizenship */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="citizenship_no">Citizenship No*</InputLabel>
            <TextField
              fullWidth
              name="citizenship_no"
              value={values.citizenship_no}
              onBlur={handleBlur}
              onChange={handleChange}
              // error={Boolean(touched.citizenship_no && errors.citizenship_no)}
            />
            {/* {errors.citizenship_no && (
              <FormHelperText error id="standard-weight-helper-text-citizenship_no">
                {errors.citizenship_no}
              </FormHelperText>
            )} */}
          </Stack>
        </Grid>
        {/* end of Citizenship */}

        {/* material Status */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="material_status">Marital Status</InputLabel>
            <Select
              aria-labelledby="material_status"
              defaultValue={values.material_status}
              name="material_status"
              values={values.material_status}
              onChange={handleChange}
            >
              <MenuItem value="Married">Married</MenuItem>
              <MenuItem value="Unmarried">Unmarried</MenuItem>
              <MenuItem value="Separated">Separated</MenuItem>
              <MenuItem value="Divorced">Divorced</MenuItem>
              <MenuItem value="Widow">Widow</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
            {/* {errors.material_status && (
              <FormHelperText error id="standard-weight-helper-text-material_status">
                {errors.material_status}
              </FormHelperText>
            )} */}
          </Stack>
        </Grid>
        {/* end of material Status */}

        {/* contact */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="patient_contact">Patient Contact</InputLabel>
            <TextField
              fullWidth
              name="patient_contact"
              value={values.patient_contact}
              onChange={handleChange}
              error={Boolean(touched.patient_contact && errors.patient_contact)}
            />
            {errors.patient_contact && (
              <FormHelperText error id="standard-weight-helper-text-patient_contact">
                {errors.patient_contact}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of contact */}

        {/* contact */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="optional_contact">Optional Contact</InputLabel>
            <TextField
              fullWidth
              name="optional_contact"
              value={values.optional_contact}
              onChange={handleChange}
              error={Boolean(touched.optional_contact && errors.optional_contact)}
            />
            {errors.optional_contact && (
              <FormHelperText error id="standard-weight-helper-text-optional_contact">
                {errors.optional_contact}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of contact */}

        {/* education */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="patient_education">Patient Education</InputLabel>
            <Select
              fullWidth
              labelId="patient_education"
              id="patient_education"
              value={values.patient_education}
              name="patient_education"
              onChange={handleChange}
              error={Boolean(touched.patient_education && errors.patient_education)}
            >
              {educationData.map((education) => (
                <MenuItem key={education.id} value={education.id}>
                  {education.education_level}
                </MenuItem>
              ))}
            </Select>
            {errors.patient_education && (
              <FormHelperText error id="standard-weight-helper-text-patient_education">
                {errors.patient_education}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of education */}

        {/* language */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="patient_language">Language</InputLabel>
            <Select
              fullWidth
              multiple
              labelId="patient_language"
              id="patient_language"
              value={values.patient_language}
              name="patient_language"
              onChange={handleChange}
              error={Boolean(touched.patient_language && errors.patient_language)}
            >
              {languageData.map((language) => (
                <MenuItem key={language.id} value={language.id}>
                  {language.language_name}
                </MenuItem>
              ))}
            </Select>
            {errors.patient_language && (
              <FormHelperText error id="standard-weight-helper-text-patient_language">
                {errors.patient_language}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of language */}

        {/* occupation */}
        <Grid item xs={12} md={3}>
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
            {errors.patient_occupation && (
              <FormHelperText error id="standard-weight-helper-text-patient_occupation">
                {errors.patient_occupation}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of occupation */}

        {/* Ethnic Group */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="ethnic_group">Ethnic Group</InputLabel>
            <Select
              labelId="ethnic_group"
              id="ethnic_group"
              value={values.ethnic_group}
              name="ethnic_group"
              onChange={handleChange}
              error={Boolean(touched.ethnic_group && errors.ethnic_group)}
            >
              {ethnicData.map((ethnic) => (
                <MenuItem key={ethnic.id} value={ethnic.id}>
                  {ethnic.ethnic_group}
                </MenuItem>
              ))}
            </Select>
            {errors.ethnic_group && (
              <FormHelperText error id="standard-weight-helper-text-ethnic_group">
                {errors.ethnic_group}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* End of Ethnic Group */}

        {/* Religions */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="religion">Religion</InputLabel>
            <Select
              labelId="religion"
              id="religion"
              value={values.religion}
              name="religion"
              onChange={handleChange}
              error={Boolean(touched.ethnic_group && errors.ethnic_group)}
            >
              {religionData.map((religion) => (
                <MenuItem key={religion.id} value={religion.id}>
                  {religion.religion}
                </MenuItem>
              ))}
            </Select>
            {errors.religion && (
              <FormHelperText error id="standard-weight-helper-text-religion">
                {errors.religion}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* End of Religions Group */}
      </Grid>
    </>
  );
};

export default PersonalInfo;
