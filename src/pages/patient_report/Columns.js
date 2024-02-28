import dayjs from 'dayjs';
export const columns = [
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
    headerName: 'Date of Birth',
    width: 150,
    editable: true,
    valueGetter: (params) => `${params.row.date_of_birth ? dayjs(params.row.date_of_birth).format('YYYY-MM-DD') : ''}`
  },

  {
    field: 'age',
    headerName: 'Age at Incident',
    width: 200,
    valueGetter: (params) =>
      `${params.row.age_at_incident || '0'} - ${params.row.month_at_incident || '0'} - ${params.row.day_at_incident || '0'} `
  },
  // from
  {
    field: 'age_group',
    headerName: 'Age Group',
    width: 100
  },
  {
    field: 'gender',
    headerName: 'Gender',
    width: 100
  },

  {
    field: 'citizenship_no',
    headerName: 'Citizenship No',
    width: 150
  },
  {
    field: 'patient_contact',
    headerName: 'Patient Contact',
    width: 150
  },
  {
    field: 'optional_contact',
    headerName: 'Optional Contact',
    width: 150
  },
  {
    field: 'parents_contact',
    headerName: 'Parents Contact',
    width: 150
  },
  {
    field: 'person_at_hospital',
    headerName: 'Person at Hospital',
    width: 150
  },
  {
    field: 'relation_to_parent',
    headerName: 'Relation to Patient',
    width: 150
  },
  {
    field: 'person_contact',
    headerName: 'Person Contact',
    width: 150
  },
  {
    field: 'patient_education',
    headerName: 'Education',
    width: 150,
    valueGetter: (params) => `${params.row.patient_education.education_level || ''}`
  },
  {
    field: 'patient_language',
    headerName: 'Language',
    width: 150,
    valueGetter: (params) => `${params.row.patient_language.map((ln) => ln.language_name).join(', ') || ''}`
  },
  {
    field: 'patient_occupation',
    headerName: 'Occupation',
    width: 150,
    valueGetter: (params) => `${params.row.patient_occupation.occupation_name || ''}`
  },
  {
    field: 'ethnic_group',
    headerName: 'Ethnicity',
    width: 250,
    valueGetter: (params) => `${params.row.ethnic_group.ethnic_group || ''}`
  },
  {
    field: 'religion',
    headerName: 'Religion',
    width: 150,
    valueGetter: (params) => `${params.row.religion.religion || ''}`
  },
  {
    field: 'material_status',
    headerName: 'Marital Status',
    width: 150
  },

  {
    field: 'provence',
    headerName: 'Province(P)',
    width: 150
  },
  {
    field: 'district',
    headerName: 'District(P)',
    width: 150
  },
  {
    field: 'local',
    headerName: 'Local Level(p)',
    width: 200
  },
  {
    field: 'ward',
    headerName: 'Ward(p)',
    width: 100
  },
  {
    field: 'tole',
    headerName: 'Tole(P)',
    width: 200
  },
  {
    field: 'foreign_address',
    headerName: 'Foreign Address(P)',
    width: 250
  },

  {
    field: 'provence2',
    headerName: 'Province(T)',
    width: 150
  },
  {
    field: 'district2',
    headerName: 'District(T)',
    width: 150
  },
  {
    field: 'local2',
    headerName: 'Local Level(T)',
    width: 200
  },
  {
    field: 'ward2',
    headerName: 'Ward(T)',
    width: 100
  },
  {
    field: 'tole2',
    headerName: 'Tole(T)',
    width: 200
  },
  {
    field: 'foreign_address2',
    headerName: 'Foreign Address(T)',
    width: 250
  },

  // from
  {
    field: 'family_type',
    headerName: 'Family Type',
    width: 200,
    valueGetter: (params) => `${params.row.family_type.family_type || ''}`
  },

  {
    field: 'suppose_occupation',
    headerName: 'Spouse Occupation',
    width: 200,
    valueGetter: (params) => `${params.row.suppose_occupation.occupation_name || ''}`
  },
  {
    field: 'parents_occupation',
    headerName: 'Parents Occupation',
    width: 200,
    valueGetter: (params) => `${params.row.parents_occupation.occupation_name || ''}`
  },

  {
    field: 'number_of_child',
    headerName: 'Number of Child',
    width: 150
  },
  {
    field: 'number_of_siblings',
    headerName: 'Number of Siblings',
    width: 150
  },

  {
    field: 'economic_status',
    headerName: 'Economic Status',
    width: 150
  },
  {
    field: 'family_support',
    headerName: 'Family Support',
    width: 150
  },
  {
    field: 'pregnant_women',
    headerName: 'Pregnant Women',
    width: 150
  },
  {
    field: 'lactating_mother',
    headerName: 'Lactating Mother',
    width: 150
  },
  {
    field: 'with_disabilities',
    headerName: 'With Disabilities',
    width: 150
  },
  {
    field: 'mental_illness',
    headerName: 'With Mental Illness',
    width: 150
  },
  {
    field: 'epilepsy',
    headerName: 'With Epilepsy',
    width: 150
  },
  {
    field: 'hiv_positive',
    headerName: 'With HIV',
    width: 150
  },
  {
    field: 'echo_other',
    headerName: 'Other',
    width: 150
  },

  {
    field: 'date_of_incident',
    headerName: 'Date of Incident',
    width: 150,
    valueGetter: (params) => `${params.row.date_of_incident ? dayjs(params.row.date_of_incident).format('YYYY-MM-DD') : ''}`
  },
  {
    field: 'area_of_burn',
    headerName: 'Area of Burn',
    width: 100
  },
  {
    field: 'percentage_of_burn',
    headerName: 'Percentage Of Burn',
    width: 150
  },
  {
    field: 'group_of_percentage',
    headerName: 'Group in Percentage',
    width: 150
  },
  {
    field: 'degree_of_burn',
    headerName: 'Degree Of Burn',
    width: 100
  },
  {
    field: 'burn_cause',
    headerName: 'Causes of Burn',
    width: 150,
    valueGetter: (params) => `${params.row.burn_cause.burn_cause || ''}`
  },
  {
    field: 'burn_type',
    headerName: 'Types of Burn ',
    width: 150,
    valueGetter: (params) => `${params.row.burn_type.burn_type || ''}`
  },
  {
    field: 'place_of_incident',
    headerName: 'Place of Incident',
    width: 150
  },
  {
    field: 'description_of_incident',
    headerName: 'Description of Incident',
    width: 200
  },
  // from here change
  {
    field: 'hospital',
    headerName: 'Hospital Name',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.hospital.hospital_name).join(' ')}`
  },
  {
    field: 'hospitalized',
    headerName: 'Admission Date at hospital',
    width: 200,
    valueGetter: (params) =>
      `${params.row.treatment
        .map((treat) => (treat.hospitalized_date ? dayjs(params.row.hospitalized_date).format('YYYY-MM-DD') : ''))
        .join(' ')}`
  },
  {
    field: 'doctor_name',
    headerName: 'Doctor Name',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.doctor_name).join(' ')}`
  },
  {
    field: 'dischared_date',
    headerName: 'Dischared Date',
    width: 200,
    valueGetter: (params) =>
      `${params.row.treatment
        .map((treat) => (treat.dischared_date ? dayjs(params.row.dischared_date).format('YYYY-MM-DD') : ''))
        .join(' ')}`
  },
  {
    field: 'expired_date',
    headerName: 'Expired Date',
    width: 200,
    valueGetter: (params) =>
      `${params.row.treatment.map((treat) => (treat.expired_date ? dayjs(params.row.expired_date).format('YYYY-MM-DD') : '')).join(' ')}`
  },
  {
    field: 'mode_of_transport',
    headerName: 'Mode of Transport',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.mode_of_transport).join(' ')}`
  },
  {
    field: 'distance',
    headerName: 'Distance(KM)',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.distance).join(' ')}`
  },
  {
    field: 'time',
    headerName: 'Time(Houres)',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.time).join(' ')}`
  },
  {
    field: 'duration_of_stay',
    headerName: 'Duration of Stay',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.duration_of_stay).join(' ')}`
  },
  {
    field: 'no_of_surgery',
    headerName: 'No of Surgery',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.no_of_surgery).join(' ')}`
  },

  {
    field: 'no_of_skin_graft',
    headerName: 'No of Skin Graft',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.no_of_skin_graft).join(' ')}`
  },
  {
    field: 'no_of_debridement',
    headerName: 'No of Debridement',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.no_of_debridement).join(' ')}`
  },
  {
    field: 'no_of_amputation',
    headerName: 'No of Amputation',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.no_of_amputation).join(' ')}`
  },
  {
    field: 'no_of_dressing',
    headerName: 'No of Dressing',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.no_of_dressing).join(' ')}`
  },
  {
    field: 'no_of_nutritional',
    headerName: 'No of Nutritional Basket Provided',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.no_of_nutritional).join(' ')}`
  },
  {
    field: 'medical_support',
    headerName: 'No of Medical Support',
    width: 200,
    valueGetter: (params) => `${params.row.treatment.map((treat) => treat.medical_support).join(', ')}`
  },
  {
    field: 'initial_status',
    headerName: 'Physiotherapie Initial Status',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((physio) => physio.initial_status).join(', ')}`
  },
  {
    field: 'applied_methods',
    headerName: 'Applied Methods(Physiotherapie)',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((physio) => physio.applied_methods).join(', ')}`
  },
  {
    field: 'dischared_status',
    headerName: 'Dischared Status(Physiotherapie)',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((physio) => physio.dischared_status).join(', ')}`
  },
  {
    field: 'observation',
    headerName: 'Observation(Physiotherapie)',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((physio) => physio.observation).join(', ')}`
  },
  {
    field: 'current_status',
    headerName: 'Current Status(Physiotherapie)',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((physio) => physio.current_status).join(', ')}`
  },
  {
    field: 'mode_of_followup',
    headerName: 'Mode of Followup(Physiotherapie)',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((physio) => physio.mode_of_followup).join(', ')}`
  },
  {
    field: 'followed_by',
    headerName: 'Followed By(Physiotherapie)',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((physio) => physio.followed_by).join(', ')}`
  },
  {
    field: 'followup_summary',
    headerName: 'Followup Summary(Physiotherapie)',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((phycho) => phycho.followup_summary.follow_up_summary).join(', ')}`
  },
  {
    field: 'number_of_session',
    headerName: 'Number of Session Provided',
    width: 200,
    valueGetter: (params) => `${params.row.physiotherapy.map((physio) => physio.number_of_session).join(', ')}`
  },
  //psychosocial
  {
    field: 'client_history',
    headerName: 'Client History(Psychosocials)',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((phycho) => phycho.client_history).join(', ')}`
  },
  {
    field: 'client_complain',
    headerName: 'Client Complain(Psychosocials)',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((phycho) => phycho.client_complain).join(', ')}`
  },
  {
    field: 'intervention',
    headerName: 'Intervention(Psychosocials)',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((phycho) => phycho.intervention).join(', ')}`
  },
  {
    field: 'changes_after_intervention',
    headerName: 'Changes After Interventation(Psychosocials)',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((phycho) => phycho.changes_after_intervention).join(', ')}`
  },
  {
    field: 'detailed_followup_report',
    headerName: 'Detailed Followup Report(Psychosocials)',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((phycho) => phycho.detailed_followup_report).join(', ')}`
  },
  {
    field: 'followup_summary',
    headerName: 'Followup Summary(Psychosocials)',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((phycho) => phycho.followup_summary.follow_up_summary).join(', ')}`
  },
  {
    field: 'mode_of_followup',
    headerName: 'Mode of Followup(Psychosocials)',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((phycho) => phycho.mode_of_followup).join(', ')}`
  },
  {
    field: 'followed_by',
    headerName: 'Followed By(Psychosocials)',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((phycho) => phycho.followed_by).join(', ')}`
  },
  {
    field: 'number_of_counseling',
    headerName: 'Number of Counseling Provided',
    width: 200,
    valueGetter: (params) => `${params.row.psychosocial.map((physio) => physio.number_of_counseling).join(', ')}`
  },
  {
    field: 'total_funding',
    headerName: 'Total Funding',
    width: 100
  }
  /*
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
  }*/
];
