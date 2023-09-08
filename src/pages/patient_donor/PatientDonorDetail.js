// project import
import MainCard from 'components/MainCard';
import { Grid, Typography, Stack } from '@mui/material';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from 'helpers/axios';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AddPatientDonor from './AddPatientDonor';

const PatientDonorDetail = () => {
  const { patientId } = useParams();
  const { data: patientData, error: patientError, isLoading: patientLoading } = useSWR(`/patient/${patientId}/`, fetcher);
  if (patientLoading) {
    return <div>Loading...</div>;
  }

  if (patientError) {
    return <div>Error on Treatment</div>;
  }
  return (
    <MainCard title="Patients Funding Detail">
      <Grid container spacing={3}>
        {/* <Grid item xs={12} md={12}>
          <Typography variant="h1" align="center">
            BVS-NEPAL
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" align="center">
            {patientData.registration_location}
          </Typography>
        </Grid> */}

        <Grid item xs={12} md={5}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5" color="primary">
              Patient Name:
            </Typography>
            <Typography variant="h6">
              {patientData.fname} {patientData.mname} {patientData.lname}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={4}>
          <Stack direction="row" spacing={2}>
            <Typography variant="h5" align="right" color="primary">
              Registration No:
            </Typography>
            <Typography variant="h6" align="right">
              {patientData.registration_number}
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="DONOR" color="primary" />
          </Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <AddPatientDonor />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default PatientDonorDetail;
