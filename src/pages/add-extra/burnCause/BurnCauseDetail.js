// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddBurnCause from './AddBurnCause';

const BurnCauseDetail = () => {
  return (
    <MainCard title="Burn Cause">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddBurnCause />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default BurnCauseDetail;
