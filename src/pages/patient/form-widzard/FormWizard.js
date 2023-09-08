import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import * as Yup from 'yup';
import { FormikWizard } from 'formik-wizard-form';
import PersonalInfo from './PersonalInfo';
import FamilyInfo from './FamilyInfo';
import RegistrationInfo from './RegistrationInfo';
import IncidentDetail from './IncidentDetail';
import axiosService from 'helpers/axios';
import { useSnackbar } from 'notistack';
import { useNavigate, useParams } from 'react-router-dom';
import { fetcher } from '../../../helpers/axios';
import useSWR from 'swr';
import dayjs from 'dayjs';
import { getUser } from 'hooks/user.actions';
import AddressInfo from './AddressInfo';
import EchoPhyInfo from './EchoPhyInfo';

const phoneRegExp = /^([+]\d{2})?\d{10}$/;

const FormWizard = () => {
  const { patientId } = useParams();
  const [finalValues, setFinalValues] = React.useState({});
  const [finished, setFinished] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const user = getUser();
  // const [selectedTreatment, setSelectedTreatment] = React.useState({});

  const { data: patientData } = useSWR(patientId ? `/patient/${patientId}` : null, fetcher);

  const initialValues = {
    creator: user.id,
    registration_date: patientData ? dayjs(patientData.registration_date).format('YYYY-MM-DD') : null,
    fiscal_year: patientData ? dayjs(patientData.fiscal_year).format('YYYY') : null,
    registration_location: patientData?.registration_location || '',

    fname: patientData?.fname || '',
    lname: patientData?.lname || '',
    mname: patientData?.mname || '',

    country: patientData?.country || '',
    provence: patientData?.provence || '',
    district: patientData?.district || '',
    local: patientData?.local || '',
    ward: patientData?.ward || null,
    tole: patientData?.tole || '',
    foreign_address: patientData?.foreign_address || '',

    country2: patientData?.country2 || '',
    provence2: patientData?.provence2 || '',
    district2: patientData?.district2 || '',
    local2: patientData?.local2 || '',
    ward2: patientData?.ward2 || null,
    tole2: patientData?.tole2 || '',
    foreign_address2: patientData?.foreign_address2 || '',

    date_of_birth: patientData ? dayjs(patientData.date_of_birth) : null,
    age_at_incident: patientData?.age_at_incident || null,
    month_at_incident: patientData?.month_at_incident || null,
    gender: patientData?.gender || '',
    citizenship_no: patientData?.citizenship_no || '',
    patient_contact: patientData?.patient_contact || '',
    optional_contact: patientData?.optional_contact || '',
    patient_education: patientData?.patient_education || '',
    patient_language: patientData?.patient_language || '',
    patient_occupation: patientData ? patientData.patient_occupation.id : '',
    ethnic_group: patientData ? patientData.ethnic_group.id : '',
    religion: patientData ? patientData.religion.id : '',
    material_status: patientData?.material_status || '',

    parents_contact: patientData?.parents_contact || '',
    suppose_occupation: patientData ? patientData.suppose_occupation.id : '',
    parents_occupation: patientData ? patientData.parents_occupation.id : '',
    family_type: patientData ? patientData.family_type.id : '',
    number_of_child: patientData?.number_of_child || null,
    number_of_siblings: patientData?.number_of_siblings || null,

    economic_status: patientData?.economic_status || '',
    family_support: patientData?.family_support || false,
    pregnant_women: patientData?.pregnant_women || false,
    lactating_mother: patientData?.lactating_mother || false,
    with_disabilities: patientData?.with_disabilities || false,
    mental_illness: patientData?.mental_illness || false,
    epilepsy: patientData?.epilepsy || false,
    hiv_positive: patientData?.hiv_positive || false,
    echo_other: patientData?.echo_other || '',

    date_of_incident: patientData ? dayjs(patientData.date_of_incident) : null,
    area_of_burn: patientData?.area_of_burn || '',
    percentage_of_burn: patientData?.percentage_of_burn || '',
    degree_of_burn: patientData?.degree_of_burn || '',
    burn_cause: patientData?.burn_cause.id || '',
    burn_type: patientData?.burn_type.id || '',
    place_of_incident: patientData?.place_of_incident || '',
    description_of_incident: patientData?.description_of_incident || '',
    person_at_hospital: patientData?.person_at_hospital || '',
    relation_to_parent: patientData?.relation_to_parent || '',
    person_contact: patientData?.person_contact || ''
  };

  const handleAddPatient = (values) => {
    setFinalValues(values);
    setFinished(true);
    values.registration_date = dayjs(values.registration_date).format('YYYY-MM-DD');
    values.date_of_birth = dayjs(values.date_of_birth).format('YYYY-MM-DD');
    // values.date_of_incident = dayjs(values.date_of_incident).format('YYYY-MM-DD');
    values.fiscal_year = dayjs(values.fiscal_year).format('YYYY');
    // Update an existing patient's data using PUT request
    if (patientId) {
      axiosService
        .put(`/patient/${patientId}/`, values)
        .then(() => {
          enqueueSnackbar('Patient updated successfully!!!', { variant: 'success' });
          navigate('/patient-list');
        })
        .catch(() => {
          enqueueSnackbar('Something went wrong while updating the patient!!!', { variant: 'error' });
        });
    } else {
      // Add a new patient using POST request
      axiosService
        .post('/patient/', values)
        .then(() => {
          enqueueSnackbar('Patient added successfully!!!', { variant: 'success' });
          navigate('/patient-list');
        })
        .catch((err) => {
          console.log(err);
          enqueueSnackbar('Something went wrong while adding the patient!!!', { variant: 'error' });
        });
    }
  };

  return (
    <div className="App">
      <FormikWizard
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={handleAddPatient}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: RegistrationInfo,
            validationSchema: Yup.object().shape({
              registration_date: Yup.string().required('Registration date is required'),
              fiscal_year: Yup.string().required('Fiscal Year is required'),
              registration_location: Yup.string().required('Registration Location is required')
            })
          },
          {
            component: PersonalInfo,
            validationSchema: Yup.object().shape({
              fname: Yup.string().required('Required'),
              lname: Yup.string().required('Required'),
              age_at_incident: Yup.number().positive('Must be Positive').integer('Must be a number').notRequired().nullable(),
              month_at_incident: Yup.number().positive('Must be Positive').integer('Must be a number').notRequired().nullable(),
              date_of_birth: Yup.date().required('Required'),
              patient_contact: Yup.string().matches(phoneRegExp, 'Phone number is not valid').notRequired().nullable(),
              optional_contact: Yup.string().matches(phoneRegExp, 'Phone number is not valid').notRequired().nullable(),
              patient_occupation: Yup.string().required('Required'),
              ethnic_group: Yup.string().required('Required'),
              religion: Yup.string().required('Required')
            })
          },
          {
            component: AddressInfo,
            validationSchema: Yup.object().shape({
              country: Yup.string().required('Please Secect Country'),
              country2: Yup.string().required('Please Secect Country')
            })
          },
          {
            component: FamilyInfo,
            validationSchema: Yup.object().shape({
              parents_contact: Yup.string().matches(phoneRegExp, 'Phone number is not valid').notRequired().nullable(),
              number_of_child: Yup.number().positive('Must be Positive').integer('Must be a number').notRequired().nullable(),
              number_of_siblings: Yup.number().positive('Must be Positive').integer('Must be a number').notRequired().nullable(),
              suppose_occupation: Yup.string().required('Required'),
              parents_occupation: Yup.string().required('Required'),
              family_type: Yup.string().required('Required')
            })
          },
          {
            component: EchoPhyInfo
          },
          {
            component: IncidentDetail,
            validationSchema: Yup.object().shape({
              date_of_incident: Yup.date().required('Required'),
              person_contact: Yup.string().matches(phoneRegExp, 'Phone number is not valid').notRequired().nullable(),
              burn_cause: Yup.string().required('Required'),
              burn_type: Yup.string().required('Required')
            })
          }
        ]}
      >
        {({ currentStepIndex, renderComponent, handlePrev, handleNext, isNextDisabled, isPrevDisabled }) => {
          return (
            <>
              <Box sx={{ width: '100%', my: '1rem' }}>
                <Stepper activeStep={currentStepIndex}>
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>Registration</StepLabel>
                  </Step>

                  <Step completed={currentStepIndex > 1}>
                    <StepLabel>Personal Information</StepLabel>
                  </Step>

                  <Step completed={currentStepIndex > 2}>
                    <StepLabel>Address Information</StepLabel>
                  </Step>

                  <Step completed={currentStepIndex > 3}>
                    <StepLabel>Family Information</StepLabel>
                  </Step>

                  <Step completed={currentStepIndex > 4}>
                    <StepLabel>Ecnomic/Physical/Health Status</StepLabel>
                  </Step>

                  <Step completed={finished}>
                    <StepLabel>Incident Details</StepLabel>
                  </Step>
                </Stepper>
              </Box>
              <Box my="2rem">{renderComponent()}</Box>
              <Box display="flex" justifyContent="space-between">
                <Button variant="contained" disabled={isPrevDisabled} type="primary" onClick={handlePrev}>
                  Previous
                </Button>
                <Button variant="contained" disabled={isNextDisabled} type="primary" onClick={handleNext}>
                  {currentStepIndex === 5 ? 'Finish' : 'Next'}
                </Button>
              </Box>
              <Box>
                <pre>{JSON.stringify(finalValues, null, 2)}</pre>
              </Box>
            </>
          );
        }}
      </FormikWizard>
    </div>
  );
};

export default FormWizard;
