// project import
import MainCard from 'components/MainCard';
import { Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AddFamily from './AddFamily';

const FamilyDetail = () => {
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
            Family Information
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="Family" color="primary" />
          </Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <AddFamily />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default FamilyDetail;
