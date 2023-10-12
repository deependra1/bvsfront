// material-ui
import { Box, Grid, Stack, Typography, CircularProgress, Alert } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import useSWR from 'swr';
import { fetcher } from 'helpers/axios';

// project import
import MainCard from 'components/MainCard';

// assets
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const PhysiotherapyData = () => {
  const { data, isLoading, isError } = useSWR('/physiotherapy/physiotherapy_count', fetcher);

  if (isLoading) return <CircularProgress color="success" />;
  if (isError) return <Alert severity="error">Something went wrong!!! — Please contact your service provider!</Alert>;
  if (!data) return <Alert severity="error">Something went wrong!!! — Please contact your service provider!</Alert>;

  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Stack spacing={0.5}>
            <Typography variant="h6" color="textSecondary">
              Physiotherapy
            </Typography>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h4" color="inherit">
                  {JSON.stringify(data.physiotherapy_count)}
                </Typography>
              </Grid>

              <Grid item></Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} alignItems="center">
          <Avatar sx={{ width: 56, height: 56, bgcolor: '#ffea00' }}>
            <SelfImprovementIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="#ffea00">
          Services Provided
        </Typography>
      </Box>
    </MainCard>
  );
};

export default PhysiotherapyData;
