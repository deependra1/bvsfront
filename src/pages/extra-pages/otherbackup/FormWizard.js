import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import * as Yup from 'yup';
import { FormikWizard } from 'formik-wizard-form';
import PersonalInfo from './PersonalInfo';
// import FamilyInfo from './FamilyInfo';
import { Grid } from '../../../node_modules/@mui/material/index';
// import IncidentDetail from './IncidentDetail';
import InitialEntry from './InitialEntry';
import axiosService, { fetcher } from 'helpers/axios';
// import TreatmentDetail from './TreatmentDetail';
// import dayjs from 'dayjs';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';

const FormWizard = () => {
  const [finalValues, setFinalValues] = React.useState({});
  const [initialValues, setInitialValues] = React.useState({
    fiscalyear: '',
    regno: '',
    fname: '',
    lname: '',
    mname: ''
    // dob: dobValue,
    // country: '',
    // provence: '',
    // district: '',
    // local: '',
    // ward: '',
    // tole: '',
    // gender: ''
  });
  const [finished, setFinished] = React.useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  // let dobValue = null;
  const { patientId } = useParams();
  const { data } = useSWR(patientId ? `/patient/${patientId}/` : null, fetcher);
  setInitialValues(...preValues, { fname: data.fname });
  return (
    <div className="App">
      <FormikWizard
        initialValues={initialValues}
        onSubmit={(values) => {
          setFinalValues(values);
          setFinished(true);
          axiosService
            .post('/patient/', values)
            .then(() => {
              enqueueSnackbar('Patient added successfully!!!', { variant: 'success' });
              navigate('/patient-list');
            })
            .catch(() => {
              enqueueSnackbar('something wents wrong!!!', { variant: 'error' });
            });
        }}
        validateOnNext
        activeStepIndex={0}
        steps={[
          {
            component: InitialEntry,
            validationSchema: Yup.object().shape({
              fiscalyear: Yup.string().required('Fiscal year is required')
            })
          },
          {
            component: PersonalInfo,
            validationSchema: Yup.object().shape({
              fname: Yup.string().required('First name is required')
            })
          }
          // {
          //   component: FamilyInfo,
          //   validationSchema: Yup.object().shape({
          //     lastname: Yup.string().required('Last name is required')
          //   })
          // },
          // {
          //   component: IncidentDetail,
          //   validationSchema: Yup.object().shape({
          //     lastname: Yup.string().required('Last name is required')
          //   })
          // },
          // {
          //   component: TreatmentDetail,
          //   validationSchema: Yup.object().shape({
          //     lastname: Yup.string().required('Last name is required')
          //   })
          // }
        ]}
      >
        {({ currentStepIndex, renderComponent, handlePrev, handleNext, isNextDisabled, isPrevDisabled }) => {
          return (
            <>
              <Box sx={{ width: '100%', my: '1rem' }}>
                <Stepper activeStep={currentStepIndex}>
                  <Step completed={currentStepIndex > 0}>
                    <StepLabel>Initial Information</StepLabel>
                  </Step>

                  <Step completed={finished}>
                    <StepLabel>Personal Information</StepLabel>
                  </Step>

                  {/* <Step completed={currentStepIndex > 2}>
                    <StepLabel>Family Information</StepLabel>
                  </Step>

                  <Step completed={currentStepIndex > 3}>
                    <StepLabel>Incident Details</StepLabel>
                  </Step>

                  <Step completed={finished}>
                    <StepLabel>Treatement Details</StepLabel>
                  </Step> */}
                </Stepper>
              </Box>
              <Box my="2rem">
                <Grid container spacing={3}>
                  {renderComponent()}
                </Grid>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button variant="contained" disabled={isPrevDisabled} type="primary" onClick={handlePrev}>
                  Previous
                </Button>
                <Button variant="contained" disabled={isNextDisabled} type="primary" onClick={handleNext}>
                  {currentStepIndex === 1 ? 'Finish' : 'Next'}
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
