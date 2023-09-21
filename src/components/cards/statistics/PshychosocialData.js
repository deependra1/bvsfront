// material-ui
import { Box, Grid, Stack, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

import useSWR from 'swr';
import { fetcher } from 'helpers/axios';

// project import
import MainCard from 'components/MainCard';

// assets
import PsychologyIcon from '@mui/icons-material/Psychology';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

const PshychosocialData = () => {
  const { data, isLoading } = useSWR('/pshychosocial/pshychosocial_count', fetcher);

  if (isLoading) return <div>Loading...</div>;
  return (
    <MainCard contentSX={{ p: 2.25 }}>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Stack spacing={0.5}>
            <Typography variant="h6" color="textSecondary">
              Pshychosocial
            </Typography>
            <Grid container alignItems="center">
              <Grid item>
                <Typography variant="h4" color="inherit">
                  {JSON.stringify(data.pshychosocial_count)}
                </Typography>
              </Grid>

              <Grid item></Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4} alignItems="center">
          <Avatar sx={{ width: 56, height: 56, bgcolor: '#ff3d00' }}>
            <PsychologyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box sx={{ pt: 2.25 }}>
        <Typography variant="caption" color="#ff3d00">
          Services Provided
        </Typography>
      </Box>
    </MainCard>
  );
};

export default PshychosocialData;
