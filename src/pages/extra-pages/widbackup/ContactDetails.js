import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const ContactDetails = ({ errors, values, handleChange }) => {
  return (
    <Grid container rowSpacing={3} spacing={2}>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          error={!!errors.email}
          name="email"
          label="Email"
          value={values.email}
          helperText={errors.email}
          onChange={handleChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField
          name="phone"
          label="Phone"
          value={values.phone}
          onChange={handleChange}
          error={!!errors.phone}
          helperText={errors.phone}
          fullWidth
        />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField name="addressLine1" label="Address Line1" value={values.addressLine1} onChange={handleChange} fullWidth />
      </Grid>
      <Grid item xs={6} md={6} sm={6} lg={6}>
        <TextField name="addressLine2" label="Address Line2" value={values.addressLine2} onChange={handleChange} fullWidth />
      </Grid>
    </Grid>
  );
};

export default ContactDetails;
