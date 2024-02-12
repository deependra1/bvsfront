// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddLanguage from './AddLanguage';

const LanguageDetail = () => {
  return (
    <MainCard title="Ethnic Group">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddLanguage />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default LanguageDetail;
