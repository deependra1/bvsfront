import React from 'react';
import useSWR from 'swr';

import { DataGrid } from '@mui/x-data-grid';
import { fetcher } from 'helpers/axios';

const PatientTable = () => {
  const { data, error, isLoading } = useSWR('/patient', fetcher, { refreshInterval: 1000 });
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
    }
  ];
  // end of column

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
