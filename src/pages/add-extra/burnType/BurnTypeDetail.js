// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddBurnType from './AddBurnType';

const BurnTypeDetail = () => {
  return (
    <MainCard title="Burn Type">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddBurnType />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default BurnTypeDetail;
