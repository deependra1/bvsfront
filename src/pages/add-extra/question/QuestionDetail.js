// project import
import MainCard from 'components/MainCard';
import { Grid } from '@mui/material';
import AddQuestion from './AddQuestion';

const QuestionDetail = () => {
  return (
    <MainCard title="Questions For Reintegration">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <AddQuestion />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default QuestionDetail;
