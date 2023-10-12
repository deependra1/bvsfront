// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddDonor from './AddDonor';

const DonorDetail = () => {
  return (
    <MainCard title="Donor Information">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddDonor />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default DonorDetail;
