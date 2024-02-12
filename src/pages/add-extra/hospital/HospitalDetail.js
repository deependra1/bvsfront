// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddHospital from './AddHospital';

const HospitalDetail = () => {
  return (
    <MainCard title="Ethnic Group">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddHospital />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default HospitalDetail;
