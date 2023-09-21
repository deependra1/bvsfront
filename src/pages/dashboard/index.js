// material-ui
import { Box, Grid, Typography } from '@mui/material';

import MainCard from 'components/MainCard';
// import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import PatientFiscalChart from './PatientFiscalChart';
import PatientGenderChart from './PatientGenderChart';
import TreatmentData from 'components/cards/statistics/TreatmentData';
import PshychosocialData from 'components/cards/statistics/PshychosocialData';
import PhysiotherapyData from 'components/cards/statistics/PhysiotherapyData';
import FundingData from 'components/cards/statistics/FundingData';

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      {/* row 1 */}
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <Typography variant="h5">Dashboard</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <TreatmentData />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <PshychosocialData />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <PhysiotherapyData />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <FundingData />
      </Grid>

      <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

      {/* my row */}
      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Patient by Fiscal Years</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <PatientFiscalChart />
          </Box>
        </MainCard>
      </Grid>

      <Grid item xs={12}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Patient by Gender</Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
        <MainCard content={false} sx={{ mt: 1.5 }}>
          <Box sx={{ pt: 1, pr: 2 }}>
            <PatientGenderChart />
          </Box>
        </MainCard>
      </Grid>
    </Grid>
  );
};

export default DashboardDefault;
