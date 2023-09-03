import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const PersonalDetails = ({ errors, values, handleChange }) => {
  return (
    <Grid container rowSpacing={3} spacing={2}>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          fullWidth
          error={!!errors.firstName}
          name="firstName"
          label="First Name"
          value={values.firstName}
          helperText={errors.firstName}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField fullWidth name="lastName" label="Last Name" value={values.lastName} onChange={handleChange} />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          fullWidth
          error={!!errors.username}
          name="username"
          label="User Name"
          value={values.username}
          helperText={errors.username}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          fullWidth
          type="password"
          error={!!errors.password}
          name="password"
          label="Password"
          value={values.password}
          helperText={errors.password}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
