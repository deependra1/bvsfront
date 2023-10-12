// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';

import AddReligion from './AddReligion';

const ReligionDetail = () => {
  return (
    <MainCard title="Religions">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddReligion />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default ReligionDetail;
