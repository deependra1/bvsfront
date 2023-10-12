import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, Alert, CircularProgress } from '@mui/material';
import Stack from '@mui/material/Stack';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import axiosService, { fetcher } from 'helpers/axios';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { getUser } from 'hooks/user.actions';

const PatientSearchTable = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);
  const user = getUser();

  const { data: patientData, error: patientError, isLoading } = useSWR('/patient/get_latest/', fetcher, { revalidateOnMount: true });

  useEffect(() => {
    if (searchTerm === '') {
      setData(patientData || []);
      setError(patientError);
    }
  }, [searchTerm, patientData, patientError]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = async () => {
    setIsSearching(true);
    try {
      const response = await axiosService.get(`/patient/?search=${searchTerm}`);
      setData(response.data); // Set the response data in the state
    } catch (error) {
      setError(true);
      console.log('Something went wrong!!!', error);
    }
    setIsSearching(false);
  };
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
            {user.type === 'acc' && (
              <Button
                variant="outlined"
                startIcon={<VolunteerActivismIcon />}
                onClick={() => handleDonor(params.id)}
                sx={{ color: '#9c27b0' }}
              >
                Funding
              </Button>
            )}

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
  if (error)
    return (
      <div>
        <Alert severity="error">Something went wrong!!! — Please contact your service provider!</Alert>
      </div>
    );
  if (isSearching)
    return (
      <div>
        <CircularProgress color="success" />
      </div>
    );
  if (isLoading)
    return (
      <div>
        <CircularProgress color="success" />
      </div>
    );

  console.log(user);
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField variant="outlined" placeholder="Search..." value={searchTerm} onChange={handleSearchChange} />
          <Button variant="outlined" onClick={handleSearchClick} sx={{ padding: 1, marginLeft: 1 }}>
            Search
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DataGrid
            rows={data}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10
                }
              }
            }}
            pageSizeOptions={[10]}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PatientSearchTable;
