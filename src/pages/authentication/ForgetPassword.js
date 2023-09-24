// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthWrapper from './AuthWrapper';
import AuthForget from './auth-forms/AuthForget';

// ================================|| LOGIN ||================================ //

const ForgetPassword = () => (
  <AuthWrapper>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Forget Password</Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <AuthForget />
      </Grid>
    </Grid>
  </AuthWrapper>
);

export default ForgetPassword;
