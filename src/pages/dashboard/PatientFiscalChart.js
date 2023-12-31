import React from 'react';
import ReactApexChart from 'react-apexcharts';
import useSWR from 'swr';
import { fetcher } from 'helpers/axios';
import { CircularProgress, Alert } from '@mui/material';

const PatientFiscalChart = () => {
  const { data, isLoading, isError } = useSWR('/patient/group_by_fiscal', fetcher);

  if (isLoading) return <CircularProgress color="success" />;
  if (isError) return <Alert severity="error">Something went wrong!!! — Please contact your service provider!</Alert>;
  if (!data) return <Alert severity="error">Something went wrong!!! — Please contact your service provider!</Alert>;

  const fiscalYears = [];
  const patientCount = [];

  // Iterate through the data array and extract the fiscal_year values
  for (const item of data) {
    fiscalYears.push(item.fiscal_year);
    patientCount.push(item.patient_count);
  }

  const options = {
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: true
      }
    },
    xaxis: {
      categories: fiscalYears,
      title: {
        text: 'Fiscal Years'
      }
    },
    yaxis: {
      title: {
        text: 'Patients'
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    grid: {
      strokeDashArray: 0
    },

    labels: {
      style: {
        colors: ' #f50057'
      }
    }
  };
  const series = [
    {
      name: 'Patients',
      data: patientCount
    }
  ];

  return <ReactApexChart options={options} series={series} type="area" height={365} />;
};
export default PatientFiscalChart;
