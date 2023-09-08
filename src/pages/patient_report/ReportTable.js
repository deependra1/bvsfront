import React from 'react';
import useSWR from 'swr';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
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
      width: 100
    },
    {
      field: 'ethnic_group',
      headerName: 'Ethnicity',
      width: 100
    },
    {
      field: 'religion',
      headerName: 'Religion',
      width: 100
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
      width: 100
    },
    {
      field: 'parents_occupation',
      headerName: 'Parents Occupation',
      width: 100
    },
    {
      field: 'family_type',
      headerName: 'Family Type',
      width: 100
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
      width: 100
    },
    {
      field: 'burn_type',
      headerName: 'Burn Type',
      width: 100
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
        // {...data}
        loading={isLoading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5
            }
          }
        }}
        pageSizeOptions={[25]}
        // checkboxSelection
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
};

export default PatientTable;
