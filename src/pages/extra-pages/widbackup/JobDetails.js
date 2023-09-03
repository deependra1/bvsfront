import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const JobDetails = ({ errors, values, handleChange }) => {
  return (
    <Grid container rowSpacing={3} spacing={2}>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField name="employerName" label="Employer Name" value={values.employerName} onChange={handleChange} fullWidth />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          name="designation"
          label="Designation"
          value={values.designation}
          onChange={handleChange}
          error={!!errors.designation}
          helperText={errors.designation}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField name="totalExperience" label="Total Experience" value={values.totalExperience} onChange={handleChange} fullWidth />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField name="city" label="City" value={values.city} onChange={handleChange} fullWidth />
      </Grid>
    </Grid>
  );
};

export default JobDetails;
