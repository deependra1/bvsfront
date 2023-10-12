// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddFamily from './AddFamily';

const FamilyDetail = () => {
  return (
    <MainCard title="Family Types">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddFamily />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default FamilyDetail;
