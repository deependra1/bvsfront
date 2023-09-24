// project import
import MainCard from 'components/MainCard';
import { Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import AddQuestion from './AddQuestion';

const QuestionDetail = () => {
  return (
    <MainCard title="Questions For Reintegration">
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <Typography variant="h1" align="center">
            BVS-NEPAL
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h3" align="center">
            Questions For Reintegration
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Divider>
            <Chip label="Questions" color="primary" />
          </Divider>
        </Grid>
        <Grid item xs={12} md={12}>
          <AddQuestion />
        </Grid>
      </Grid>
    </MainCard>
  );
};

export default QuestionDetail;
