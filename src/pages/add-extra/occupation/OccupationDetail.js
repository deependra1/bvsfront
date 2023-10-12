// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddOccupation from './AddOccupation';

const OccupationDetail = () => {
  return (
    <MainCard title="Occupations">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddOccupation />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default OccupationDetail;
