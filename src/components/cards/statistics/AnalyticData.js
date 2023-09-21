// material-ui
import { Grid, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

// project import
import MainCard from 'components/MainCard';

// assets
import VaccinesRoundedIcon from '@mui/icons-material/VaccinesRounded';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const AnalyticData = ({ title, count }) => (
  <MainCard contentSX={{ p: 2.25 }}>
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <Stack spacing={0.5}>
          <Typography variant="h6" color="textSecondary">
            {title}
          </Typography>
          <Grid container alignItems="center">
            <Grid item>
              <Typography variant="h4" color="inherit">
                {count}
              </Typography>
            </Grid>

            <Grid item></Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid item xs={12} md={4} alignItems="center">
        <Avatar sx={{ width: 56, height: 56, bgcolor: '#2196f3' }}>
          <VaccinesRoundedIcon />
        </Avatar>
      </Grid>
    </Grid>
  </MainCard>
);

export default AnalyticData;
