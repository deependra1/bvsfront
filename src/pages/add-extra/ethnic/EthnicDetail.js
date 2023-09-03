// project import
import MainCard from 'components/MainCard';
import { Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AddEthnic from './AddEthnic';

const EthnicDetail = () => {
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
            Ethnic Group Information
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="ETHNIC GROUP" color="primary" />
          </Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <AddEthnic />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default EthnicDetail;
