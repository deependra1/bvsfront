// project import
import MainCard from 'components/MainCard';
import { Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AddOccupation from './AddOccupation';

const OccupationDetail = () => {
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
            Occupation Information
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="OCCUPATION" color="primary" />
          </Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <AddOccupation />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default OccupationDetail;
