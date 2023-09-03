// project import
import MainCard from 'components/MainCard';
import PatientCard from './PatientCard';
import { Grid, Stack } from '../../../node_modules/@mui/material/index';

// ==============================|| SAMPLE PAGE ||============================== //

const AllPatient = () => (
  <MainCard title="All Patient">
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <PatientCard />
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <PatientCard />
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <PatientCard />
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <PatientCard />
        </Stack>
      </Grid>
      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <PatientCard />
        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        <Stack spacing={1}>
          <PatientCard />
        </Stack>
      </Grid>
    </Grid>
  </MainCard>
);

export default AllPatient;
