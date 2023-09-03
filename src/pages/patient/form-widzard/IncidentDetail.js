import { Grid, InputLabel, Stack, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const IncidentDetail = ({ errors, values, handleChange, setFieldValue }) => {
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
                // onBlur={handleBlur}
                onChange={(newValue) => setFieldValue('date_of_incident', newValue, true)}
                // error={Boolean(touched.date_of_incident && errors.date_of_incident)}
              />
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
              error={!!errors.area_of_burn}
              name="area_of_burn"
              value={values.area_of_burn}
              helperText={errors.area_of_burn}
              onChange={handleChange}
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
              error={!!errors.percentage_of_burn}
              name="percentage_of_burn"
              value={values.percentage_of_burn}
              helperText={errors.percentage_of_burn}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* end of percentage of burn */}

        {/* degree of burn */}
        <Grid item xs={12} md={3}>
          <Stack spacing={1}>
            <InputLabel htmlFor="degree_of_burn">Degree of Burn</InputLabel>
            <TextField
              fullWidth
              type="number"
              error={!!errors.degree_of_burn}
              name="degree_of_burn"
              value={values.degree_of_burn}
              helperText={errors.degree_of_burn}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* end of degree of burn */}

        {/* Cause of burn */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="cause_of_burn">Cause of Burn</InputLabel>
            <TextField
              fullWidth
              error={!!errors.cause_of_burn}
              name="cause_of_burn"
              value={values.cause_of_burn}
              helperText={errors.cause_of_burn}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* end of Cause of burn */}

        {/* Type of burn */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="type_of_burn">Type of Burn</InputLabel>
            <TextField
              fullWidth
              error={!!errors.type_of_burn}
              name="type_of_burn"
              value={values.type_of_burn}
              helperText={errors.type_of_burn}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* end of Type of burn */}

        {/* Place of burn */}
        <Grid item xs={12} md={4}>
          <Stack spacing={1}>
            <InputLabel htmlFor="place_of_incident">Place of Incident</InputLabel>
            <TextField
              fullWidth
              error={!!errors.place_of_incident}
              name="place_of_incident"
              value={values.place_of_incident}
              helperText={errors.place_of_incident}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
        {/* end of Place of burn */}

        {/* description */}
        <Grid item xs={12}>
          <Stack spacing={1}>
            <InputLabel htmlFor="description_of_incident">Brief Description of Incident</InputLabel>
            <TextField
              fullWidth
              multiline
              rows={4}
              error={!!errors.description_of_incident}
              name="description_of_incident"
              value={values.description_of_incident}
              helperText={errors.description_of_incident}
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
