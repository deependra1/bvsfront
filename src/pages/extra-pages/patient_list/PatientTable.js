import axiosService, { fetcher } from 'helpers/axios';
import React from 'react';
import useSWR from 'swr';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';
import { useSnackbar } from 'notistack';

const PatientTable = () => {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { data, error, isLoading, mutate } = useSWR('/patient', fetcher, { revalidateOnMount: true });
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
          <IconButton onClick={() => handleDelete(params.id)} sx={{ color: '#f44336' }}>
            <DeleteIcon />
          </IconButton>
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
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
};

export default PatientTable;
