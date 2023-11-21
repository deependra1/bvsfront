import React, { useState, useEffect } from 'react';
import { Button, TextField, Grid, CircularProgress, Alert } from '@mui/material';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import useSWR from 'swr';
import axiosService, { fetcher } from 'helpers/axios';
import { columns } from './Columns';

const PatientTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);
  const [mergedColumns, setMergedColumns] = useState([]);

  const { data: donorData } = useSWR(`/donor/`, fetcher);
  const { data: questionData } = useSWR(`/question/`, fetcher);

  useEffect(() => {
    if (donorData) {
      const funding_col = donorData.map((item) => ({
        field: item.donor_name,
        headerName: item.donor_name,
        width: 200,
        valueGetter: (params) => `${params.row.funding_piv[item.donor_name] || ''}`
      }));

      setMergedColumns([...columns, ...funding_col]);
    }

    if (questionData) {
      const question_col = questionData.map((item) => ({
        field: item.questionnaire,
        headerName: item.questionnaire,
        width: 200,
        valueGetter: (params) => `${params.row.reintegration[item.questionnaire] || ''}`
      }));

      setMergedColumns((existingColumns) => (existingColumns ? [...existingColumns, ...question_col] : question_col));
    }
  }, [donorData, questionData]);

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
            experimentalFeatures={{ columnGrouping: true }}
            rows={data}
            columns={mergedColumns}
            loading={isSearching}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5
                }
              }
            }}
            pageSizeOptions={[5]}
            disableRowSelectionOnClick
            slots={{ toolbar: GridToolbar }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PatientTable;
