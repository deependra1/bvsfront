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
    ward: patientData?.ward || '',
    tole: patientData?.tole || '',
    date_of_birth: patientData ? dayjs(patientData.date_of_birth) : null,
    age_at_incident: patientData?.age_at_incident || '',
    gender: patientData?.gender || '',
    citizenship_no: patientData?.citizenship_no || '',
    patient_contact: patientData?.patient_contact || '',
    parents_contact: patientData?.parents_contact || '',
    patient_occupation: patientData ? patientData.patient_occupation.id : '',
    suppose_occupation: patientData ? patientData.suppose_occupation.id : '',
    parents_occupation: patientData ? patientData.parents_occupation.id : '',

    ethnic_group: patientData ? patientData.ethnic_group.id : '',
    religion: patientData ? patientData.religion.id : '',
    family_type: patientData ? patientData.family_type.id : '',
    material_status: patientData?.material_status || '',
    number_of_child: patientData?.number_of_child || '',
    number_of_siblings: patientData?.number_of_siblings || '',

    date_of_incident: patientData ? dayjs(patientData.date_of_incident) : null,
    area_of_burn: patientData?.area_of_burn || '',
    percentage_of_burn: patientData?.percentage_of_burn || '',
    degree_of_burn: patientData?.degree_of_burn || '',
    cause_of_burn: patientData?.cause_of_burn || '',
    type_of_burn: patientData?.type_of_burn || '',
    place_of_incident: patientData?.place_of_incident || '',
    description_of_incident: patientData?.description_of_incident || ''
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
              fname: Yup.string().required('First name is required'),
              lname: Yup.string().required('Last name is required'),
              age_at_incident: Yup.number().required('This field is required and numeric field'),
              gender: Yup.string().required('Gender field is required')
              // country: Yup.string().required('Country is required'),
              // provence: Yup.string().required('Provence is required'),
              // district: Yup.string().required('District is required'),
              // local: Yup.string().required('Local level is required'),
              // ward: Yup.string().required('Ward number is required'),
              // tole: Yup.string().required('Tole is required'),
              // date_of_birth: Yup.string().required('Date of birth is required'),
              // age_at_incident: Yup.string().required('Age at incident is required'),
              // gender: Yup.string().required('Gender is required'),
              // citizenship_no: Yup.string().required('Citizenship number is required')
            })
          },
          {
            component: FamilyInfo
          },
          {
            component: IncidentDetail
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
                    <StepLabel>Family Information</StepLabel>
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
                  {currentStepIndex === 3 ? 'Finish' : 'Next'}
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
