// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddFollowup from './AddFollowup';

const FollowupDetail = () => {
  return (
    <MainCard title="Ethnic Group">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddFollowup />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default FollowupDetail;
