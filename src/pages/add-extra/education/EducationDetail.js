// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddEducation from './AddEducation';

const EducationDetail = () => {
  return (
    <MainCard title="Ethnic Group">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddEducation />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default EducationDetail;
