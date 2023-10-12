import axiosService, { fetcher } from 'helpers/axios';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { useSnackbar } from 'notistack';
import { getUser } from 'hooks/user.actions';
import { Button, TextField, Grid, CircularProgress, Alert } from '@mui/material';

const PatientTable = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const user = getUser();
  const {
    data: patientData,
    error: patientError,
    isLoading,
    mutate
  } = useSWR('/patient/get_latest/', fetcher, { revalidateOnMount: true });

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
      headerName: 'Registration Number',
      width: 150,
      editable: true
    },
    {
      field: 'fiscal_year',
      headerName: 'Fiscal Year',
      width: 150,
      editable: true
    },
    {
      field: 'registration_date',
      headerName: 'Registration Date',
      width: 150,
      editable: true
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      valueGetter: (params) => `${params.row.fname || ''} ${params.row.mname || ''} ${params.row.lname || ''}`
    },

    {
      field: 'actions',
      type: 'actions',
      width: 100,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleShow(params.id)} color="primary">
            <VisibilityIcon />
          </IconButton>
          <IconButton onClick={() => handleEdit(params.id)} sx={{ color: '#9c27b0' }}>
            <EditIcon />
          </IconButton>
          {user.is_superuser && (
            <IconButton onClick={() => handleDelete(params.id)} sx={{ color: '#f44336' }}>
              <DeleteIcon />
            </IconButton>
          )}
        </>
      )
    }
  ];
  // end of column

  // functions
  const handleShow = (id) => {
    navigate(`/patient-detail/${id}/`);
  };

  const handleEdit = (id) => {
    navigate(`/patient/${id}/`);
  };

  const handleDelete = (id) => {
    axiosService
      .delete(`/patient/${id}`)
      .then(() => {
        enqueueSnackbar('Patient Deleted successfully!!!', { variant: 'success' });
        mutate();
      })
      .catch(() => {
        enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
      });
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
            disableRowSelectionOnClick
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PatientTable;
