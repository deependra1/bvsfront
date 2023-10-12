// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddEthnic from './AddEthnic';

const EthnicDetail = () => {
  return (
    <MainCard title="Ethnic Group">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddEthnic />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default EthnicDetail;
