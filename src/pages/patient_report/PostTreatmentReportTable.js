import React, { useState } from 'react';
import { Button, TextField, Grid, CircularProgress, Alert } from '@mui/material';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import axiosService from 'helpers/axios';

const PostTreatmentReportTable = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState(false);

  // const { data, error, isLoading, mutate } = useSWR(`/patient/?search=${searchTerm}`, fetcher);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = async () => {
    setIsSearching(true);
    try {
      const response = await axiosService.get(`/patient/post_treatment_patients/?search=${searchTerm}`);
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
      width: 100,
      editable: true
    },
    {
      field: 'registration_date',
      headerName: 'Registration Date',
      width: 150,
      editable: true
    },
    {
      field: 'registration_location',
      headerName: 'Branch Office',
      width: 150,
      editable: true
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      width: 200,
      valueGetter: (params) => `${params.row.fname || ''} ${params.row.mname || ''} ${params.row.lname || ''}`
    },
    {
      field: 'date_of_birth',
      headerName: 'DOB',
      width: 100
    },
    {
      field: 'age',
      headerName: 'Age(Y-M)',
      width: 75,
      valueGetter: (params) => `${params.row.age_at_incident || ''} - ${params.row.month_at_incident || ''} `
    },
    // from
    {
      field: 'gender',
      headerName: 'Gender',
      width: 100
    },
    {
      field: 'citizenship_no',
      headerName: 'Citizenship No',
      width: 100
    },
    {
      field: 'patient_contact',
      headerName: 'Contact',
      width: 100
    },
    {
      field: 'optional_contact',
      headerName: 'Opt. Contact',
      width: 100
    },
    {
      field: 'patient_education',
      headerName: 'Education',
      width: 100
    },
    {
      field: 'patient_language',
      headerName: 'Language',
      width: 100
    },
    {
      field: 'patient_occupation',
      headerName: 'Occupation',
      width: 100,
      valueGetter: (params) => `${params.row.patient_occupation.occupation_name || ''}`
    },
    {
      field: 'ethnic_group',
      headerName: 'Ethnicity',
      width: 100,
      valueGetter: (params) => `${params.row.ethnic_group.ethnic_group || ''}`
    },
    {
      field: 'religion',
      headerName: 'Religion',
      width: 100,
      valueGetter: (params) => `${params.row.religion.religion || ''}`
    },
    {
      field: 'material_status',
      headerName: 'Material',
      width: 100
    },

    {
      field: 'permanentAddress',
      headerName: 'P Address',
      width: 250,
      valueGetter: (params) => {
        if (params.row.country === 'Nepal') {
          return `${params.row.tole || ''} ${','} ${params.row.local || ''} ${'-'} ${params.row.ward || ''} ${','} ${
            params.row.district || ''
          } ${','} ${params.row.provence || ''}`;
        }
        if (params.row.country === 'Foreign') {
          return `${params.row.foreign_address || ''} `;
        }
      }
    },
    {
      field: 'tempAddress',
      headerName: 'Incident At',
      width: 250,
      valueGetter: (params) => {
        if (params.row.country2 === 'Nepal') {
          return `${params.row.tole2 || ''} ${','} ${params.row.local2 || ''} ${'-'} ${params.row.ward2 || ''} ${','} ${
            params.row.district2 || ''
          } ${','} ${params.row.provence2 || ''}`;
        }
        if (params.row.country2 === 'Foreign') {
          return `${params.row.foreign_address2 || ''} `;
        }
      }
    },
    // from
    {
      field: 'parents_contact',
      headerName: 'Parents Contact',
      width: 100
    },
    {
      field: 'suppose_occupation',
      headerName: 'Suppose Occupation',
      width: 100,
      valueGetter: (params) => `${params.row.suppose_occupation.occupation_name || ''}`
    },
    {
      field: 'parents_occupation',
      headerName: 'Parents Occupation',
      width: 100,
      valueGetter: (params) => `${params.row.parents_occupation.occupation_name || ''}`
    },
    {
      field: 'family_type',
      headerName: 'Family Type',
      width: 100,
      valueGetter: (params) => `${params.row.family_type.family_type || ''}`
    },
    {
      field: 'number_of_child',
      headerName: 'Number of Child',
      width: 100
    },
    {
      field: 'number_of_siblings',
      headerName: 'Number of Siblings',
      width: 100
    },

    {
      field: 'economic_status',
      headerName: 'Economic Status',
      width: 100
    },
    {
      field: 'family_support',
      headerName: 'Family Support',
      width: 100
    },
    {
      field: 'pregnant_women',
      headerName: 'Pregnant Women',
      width: 100
    },
    {
      field: 'lactating_mother',
      headerName: 'Lactating Mother',
      width: 100
    },
    {
      field: 'with_disabilities',
      headerName: 'With Disabilities',
      width: 100
    },
    {
      field: 'mental_illness',
      headerName: 'Mental Illness',
      width: 100
    },
    {
      field: 'epilepsy',
      headerName: 'Epilepsy',
      width: 100
    },
    {
      field: 'hiv_positive',
      headerName: 'HIV',
      width: 100
    },
    {
      field: 'echo_other',
      headerName: 'Other',
      width: 100
    },

    {
      field: 'date_of_incident',
      headerName: 'Date of Incident',
      width: 100
    },
    {
      field: 'area_of_burn',
      headerName: 'Area of Burn',
      width: 100
    },
    {
      field: 'percentage_of_burn',
      headerName: 'Percentage Of Burn',
      width: 100
    },
    {
      field: 'degree_of_burn',
      headerName: 'Degree Of Burn',
      width: 100
    },
    {
      field: 'burn_cause',
      headerName: 'Burn Cause',
      width: 100,
      valueGetter: (params) => `${params.row.burn_cause.burn_cause || ''}`
    },
    {
      field: 'burn_type',
      headerName: 'Burn Type',
      width: 100,
      valueGetter: (params) => `${params.row.burn_type.burn_type || ''}`
    },
    {
      field: 'place_of_incident',
      headerName: 'Place of Incident',
      width: 100
    },
    {
      field: 'description_of_incident',
      headerName: 'Description of Incident',
      width: 100
    },
    {
      field: 'person_at_hospital',
      headerName: 'Person at Hospital',
      width: 100
    },
    {
      field: 'relation_to_parent',
      headerName: 'Relation to Patient',
      width: 100
    },
    {
      field: 'person_contact',
      headerName: 'Person Contact',
      width: 100
    },
    //
    {
      field: 'treatment_count',
      headerName: 'Treatment Count',
      width: 100
    },
    {
      field: 'funding_count',
      headerName: 'Funding Count',
      width: 100
    },
    {
      field: 'physiotherapie_count',
      headerName: 'Physiotherapie Count',
      width: 100
    },
    {
      field: 'psychosocials_count',
      headerName: 'Psychosocials Count',
      width: 100
    },
    {
      field: 'total_funding',
      headerName: 'Total Funding',
      width: 100
    },
    {
      field: 'total_surgery',
      headerName: 'Total Surgery',
      width: 100
    },
    {
      field: 'total_skin_graft',
      headerName: 'Total Skin Graft',
      width: 100
    },
    {
      field: 'total_debridement',
      headerName: 'Total Debridement',
      width: 100
    },
    {
      field: 'total_amputation',
      headerName: 'Total Amputation',
      width: 100
    },
    {
      field: 'total_dressing',
      headerName: 'Total Dressing',
      width: 100
    },
    {
      field: 'total_nutritional',
      headerName: 'Nutritional Support',
      width: 100
    },
    {
      field: 'total_medical_support',
      headerName: 'Medical Support',
      width: 100
    }
  ];
  // end of column

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
            loading={isSearching}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5
                }
              }
            }}
            // pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
            slots={{ toolbar: GridToolbar }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PostTreatmentReportTable;
