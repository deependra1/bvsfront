// project import
import MainCard from 'components/MainCard';
import { Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AddBurnCause from './AddBurnCause';

const BurnCauseDetail = () => {
  return (
    <MainCard title="Donor Information">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography variant="h1" align="center">
            BVS-NEPAL
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" align="center">
            Burn Cause Information
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="ETHNIC GROUP" color="primary" />
          </Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <AddBurnCause />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default BurnCauseDetail;
