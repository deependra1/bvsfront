import React from 'react';
import { useTheme } from '@mui/material/styles';
import ReactApexChart from 'react-apexcharts';
import useSWR from 'swr';
import { fetcher } from 'helpers/axios';

const PatientGenderChart = () => {
  const theme = useTheme();

  const { primary, secondary } = theme.palette.text;
  const line = theme.palette.divider;

  const warning = theme.palette.warning.main;
  const primaryMain = theme.palette.primary.main;
  //   const successDark = theme.palette.success.dark;
  const { data, isLoading, isError } = useSWR('/patient/group_by_gender', fetcher);

  if (isLoading || isError) return <div>Loading</div>;

  const gender = [];
  const patientCount = [];

  // Iterate through the data array and extract the fiscal_year values
  for (const item of data) {
    gender.push(item.gender);
    patientCount.push(item.patient_count);
  }

  const options = {
    colors: [warning, primaryMain],
    chart: {
      type: 'bar',
      height: 430,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '30%',
        borderRadius: 4
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 8,
      colors: ['transparent']
    },
    xaxis: {
      categories: gender,
      title: {
        text: 'Gender'
      },
      labels: {
        style: {
          colors: [primary]
        }
      }
    },
    yaxis: {
      title: {
        text: 'Patients'
      },
      labels: {
        style: {
          colors: [secondary]
        }
      }
    },
    grid: {
      borderColor: line
    },
    tooltip: {
      theme: 'light'
    },
    fill: {
      opacity: 1
    },
    responsive: [
      {
        breakpoint: 600,
        options: {
          yaxis: {
            show: false
          }
        }
      }
    ]
  };
  const series = [
    {
      name: 'Patients',
      data: patientCount
    }
  ];

  return <ReactApexChart options={options} series={series} type="bar" height={365} />;
};
export default PatientGenderChart;
