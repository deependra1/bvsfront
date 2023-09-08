import { Grid, InputLabel, Stack, TextField, Select, MenuItem, FormHelperText } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import useSWR from 'swr';
import { fetcher } from 'helpers/axios';

const IncidentDetail = ({ errors, values, handleChange, setFieldValue, touched, handleBlur }) => {
  const { data: causeData, error: causeError, isLoading: causeLoading } = useSWR(`/burn_cause/`, fetcher, { revalidateOnMount: true });
  const { data: typeData, error: typeError, isLoading: typeLoading } = useSWR(`/burn_type/`, fetcher, { revalidateOnMount: true });
  if (causeLoading || typeLoading) {
    return <div>Loading...</div>;
  }

  if (causeError || typeError) {
    return <div>Error on Data</div>;
  }
  return (
    <>
      <Grid container spacing={3}>
        {/* dot */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="dob">Date of Incident*</InputLabel>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                name="date_of_incident"
                views={['year', 'month', 'day']}
                value={values.date_of_incident}
                onBlur={handleBlur}
                onChange={(newValue) => setFieldValue('date_of_incident', newValue, true)}
                error={Boolean(touched.date_of_incident && errors.date_of_incident)}
              />
              {errors.date_of_incident && (
                <FormHelperText error id="standard-weight-helper-text-date_of_incident">
                  {errors.date_of_incident}
                </FormHelperText>
              )}
            </LocalizationProvider>
          </Stack>
        </Grid>
        {/* end of dot */}

        {/* Area of burn */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="area_of_burn">Area of Burn</InputLabel>
            <TextField
              fullWidth
              name="area_of_burn"
              value={values.area_of_burn}
              onChange={handleChange}
              error={Boolean(touched.area_of_burn && errors.area_of_burn)}
            />
          </Stack>
        </Grid>
        {/* end of Area of burn */}

        {/* percentage of burn */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="percentage_of_burn">Percentage of Burn</InputLabel>
            <TextField
              fullWidth
              type="number"
              name="percentage_of_burn"
              value={values.percentage_of_burn}
              onChange={handleChange}
              error={Boolean(touched.percentage_of_burn && errors.percentage_of_burn)}
            />
          </Stack>
        </Grid>
        {/* end of percentage of burn */}

        {/* degree of burn */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="degree_of_burn">Degree of Burn</InputLabel>
            <Select
              aria-labelledby="degree_of_burn"
              defaultValue={values.degree_of_burn}
              name="degree_of_burn"
              values={values.degree_of_burn}
              onChange={handleChange}
              error={Boolean(touched.degree_of_burn && errors.degree_of_burn)}
            >
              <MenuItem value="I">I</MenuItem>
              <MenuItem value="II">II</MenuItem>
              <MenuItem value="III">III</MenuItem>
              <MenuItem value="IV">IV</MenuItem>
              <MenuItem value="NA">NA</MenuItem>
            </Select>
          </Stack>
        </Grid>
        {/* end of degree of burn */}

        {/* Cause of burn */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="burn_cause">Cause of Burn</InputLabel>
            <Select
              labelId="burn_cause"
              id="burn_cause"
              value={values.burn_cause}
              name="burn_cause"
              onChange={handleChange}
              error={Boolean(touched.burn_cause && errors.burn_cause)}
            >
              {causeData.map((cause) => (
                <MenuItem key={cause.id} value={cause.id}>
                  {cause.burn_cause}
                </MenuItem>
              ))}
            </Select>
            {errors.burn_cause && (
              <FormHelperText error id="standard-weight-helper-text-burn_cause">
                {errors.burn_cause}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of Cause of burn */}

        {/* Type of burn */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="burn_type">Type of Burn</InputLabel>
            <Select
              labelId="burn_type"
              id="burn_type"
              value={values.burn_type}
              name="burn_type"
              onChange={handleChange}
              error={Boolean(touched.burn_type && errors.burn_type)}
            >
              {typeData.map((type) => (
                <MenuItem key={type.id} value={type.id}>
                  {type.burn_type}
                </MenuItem>
              ))}
            </Select>
            {errors.burn_type && (
              <FormHelperText error id="standard-weight-helper-text-burn_type">
                {errors.burn_type}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of Type of burn */}

        {/* Place of burn */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="relation_to_parent">Place of Incident</InputLabel>
            <TextField
              fullWidth
              name="relation_to_parent"
              value={values.relation_to_parent}
              onChange={handleChange}
              error={Boolean(touched.relation_to_parent && errors.relation_to_parent)}
            />
          </Stack>
        </Grid>
        {/* end of Place of burn */}

        {/* person at hospital */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="person_at_hospital">Person at Hospital</InputLabel>
            <TextField
              fullWidth
              name="person_at_hospital"
              value={values.person_at_hospital}
              onChange={handleChange}
              error={Boolean(touched.person_at_hospital && errors.person_at_hospital)}
            />
          </Stack>
        </Grid>
        {/* end of person at hospital */}

        {/* Relationship with Patient */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="place_of_incident">Relationship with Patient</InputLabel>
            <TextField
              fullWidth
              name="place_of_incident"
              value={values.place_of_incident}
              onChange={handleChange}
              error={Boolean(touched.place_of_incident && errors.place_of_incident)}
            />
          </Stack>
        </Grid>
        {/* end of Relationship with Patient */}

        {/* Contact of Person */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="person_contact">Person Contact</InputLabel>
            <TextField
              fullWidth
              name="person_contact"
              value={values.person_contact}
              onChange={handleChange}
              error={Boolean(touched.person_contact && errors.person_contact)}
            />
            {errors.person_contact && (
              <FormHelperText error id="standard-weight-helper-text-person_contact">
                {errors.person_contact}
              </FormHelperText>
            )}
          </Stack>
        </Grid>
        {/* end of Contact of Person */}

        {/* description */}
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="description_of_incident">Brief Description of Incident</InputLabel>
            <TextField
              fullWidth
              multiline
              rows={4}
              name="description_of_incident"
              value={values.description_of_incident}
              error={Boolean(touched.description_of_incident && errors.description_of_incident)}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* end of description */}
      </Grid>
    </>
  );
};

export default IncidentDetail;
