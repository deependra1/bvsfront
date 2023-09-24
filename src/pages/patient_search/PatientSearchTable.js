import { fetcher } from 'helpers/axios';
import React from 'react';
import useSWR from 'swr';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Diversity1Icon from '@mui/icons-material/Diversity1';

import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';

const PatientSearchTable = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useSWR('/patient', fetcher, { revalidateOnMount: true });
  // coloum
  const columns = [
    {
      field: 'registration_number',
      headerName: 'Reg Number',
      width: 100,
      editable: true
    },

    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 150,
      valueGetter: (params) => `${params.row.fname || ''} ${params.row.mname || ''} ${params.row.lname || ''}`
    },

    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 750,
      renderCell: (params) => (
        <>
          <Stack spacing={1} direction="row">
            <Button variant="outlined" startIcon={<VaccinesIcon />} onClick={() => handleTreatment(params.id)} color="primary">
              Treatment
            </Button>
            <Button
              variant="outlined"
              startIcon={<VolunteerActivismIcon />}
              onClick={() => handleDonor(params.id)}
              sx={{ color: '#9c27b0' }}
            >
              Funding
            </Button>

            <Button variant="outlined" startIcon={<PsychologyIcon />} onClick={() => handlePsychosocial(params.id)} color="error">
              Psychosocil
            </Button>
            <Button variant="outlined" startIcon={<SelfImprovementIcon />} onClick={() => handlePhysiotherapy(params.id)} color="warning">
              Physiotherapy
            </Button>
            <Button variant="outlined" startIcon={<Diversity1Icon />} onClick={() => handleCost(params.id)} color="success">
              Reintegration
            </Button>
          </Stack>
        </>
      )
    }
  ];
  // end of column

  // functions
  const handleTreatment = (id) => {
    navigate(`/patient/treatment/${id}/`);
  };
  const handleDonor = (id) => {
    navigate(`/patient/donor/${id}/`);
  };
  const handleCost = (id) => {
    navigate(`/patient/reintegration/${id}/`);
  };
  const handlePsychosocial = (id) => {
    navigate(`/patient/phychosocial/${id}/`);
  };
  const handlePhysiotherapy = (id) => {
    navigate(`/patient/physiotherapy/${id}/`);
  };

  // end of function

  // rendering
  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;
  console.log(data);
  return (
    <div>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[5]}
      />
    </div>
  );
};

export default PatientSearchTable;
