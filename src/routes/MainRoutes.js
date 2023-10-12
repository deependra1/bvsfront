import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import ProtectedRoute from './ProtectedRoute';

const AddPatient = Loadable(lazy(() => import('pages/patient/AddPatient')));
const PatientList = Loadable(lazy(() => import('pages/patient_list/PatientList')));
const PatientDetail = Loadable(lazy(() => import('pages/patient_list/PatientDetail')));
const PatientReport = Loadable(lazy(() => import('pages/patient_report/PatientReport')));
const PatienSearchtList = Loadable(lazy(() => import('pages/patient_search/PatientSearchList')));
const PatientTreatmentDetail = Loadable(lazy(() => import('pages/patient_treatment/PatientTreatmentDetail')));
const PatientPhychosocialDetail = Loadable(lazy(() => import('pages/patient_phychosocial/PatientPhychosocialDetail')));
const PatientPhysiotherapyDetail = Loadable(lazy(() => import('pages/patient_physiotherapy/PatientPhysiotherapyDetail')));
const PatientDonorDetail = Loadable(lazy(() => import('pages/patient_donor/PatientDonorDetail')));
const PatientReintegrationDetail = Loadable(lazy(() => import('pages/patient_reintegration/PatientReintegrationDetail')));
const DonorDetail = Loadable(lazy(() => import('pages/add-extra/donor/DonorDetail')));
const OccupationDetail = Loadable(lazy(() => import('pages/add-extra/occupation/OccupationDetail')));
const EthnicDetail = Loadable(lazy(() => import('pages/add-extra/ethnic/EthnicDetail')));
const ReligionDetail = Loadable(lazy(() => import('pages/add-extra/religion/ReligionDetail')));
const FamilyDetail = Loadable(lazy(() => import('pages/add-extra/family/FamilyDetail')));
const UserDetails = Loadable(lazy(() => import('pages/users_details/UserDetails')));
const BurnCauseDetail = Loadable(lazy(() => import('pages/add-extra/burnCause/BurnCauseDetail')));
const BurnTypeDetail = Loadable(lazy(() => import('pages/add-extra/burnType/BurnTypeDetail')));
const ChangePassword = Loadable(lazy(() => import('pages/users_details/ChangePassword')));
const QuestionDetail = Loadable(lazy(() => import('pages/add-extra/question/QuestionDetail')));
const PostTreatmentReport = Loadable(lazy(() => import('pages/patient_report/PostTreatmentReport')));

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
// const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// // render - utilities
// const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
// const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
// const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    // {
    //   path: 'color',
    //   element: <Color />
    // },

    {
      path: 'patient',
      element: <AddPatient />
    },

    {
      path: 'patient/:patientId/',
      element: <AddPatient />
    },

    {
      path: 'patient-list',
      element: <PatientList />
    },
    {
      path: '/patient-detail/:patientId/',
      element: <PatientDetail />
    },
    {
      path: '/patient-search',
      element: <PatienSearchtList />
    },
    {
      path: '/patient/treatment/:patientId/',
      element: <PatientTreatmentDetail />
    },
    {
      path: '/patient/phychosocial/:patientId/',
      element: <PatientPhychosocialDetail />
    },
    {
      path: '/patient/physiotherapy/:patientId/',
      element: <PatientPhysiotherapyDetail />
    },
    {
      path: '/patient/donor/:patientId/',
      element: <PatientDonorDetail />
    },
    {
      path: '/patient/reintegration/:patientId/',
      element: <PatientReintegrationDetail />
    },
    {
      path: '/patient-report',
      element: <PatientReport />
    },
    {
      path: '/post-treatment-report',
      element: <PostTreatmentReport />
    },
    {
      path: '/add-donor',
      element: <DonorDetail />
    },
    {
      path: '/add-question',
      element: <QuestionDetail />
    },

    {
      path: '/add-occupation',
      element: <OccupationDetail />
    },

    {
      path: '/add-ethnic',
      element: <EthnicDetail />
    },

    {
      path: '/add-religion',
      element: <ReligionDetail />
    },

    {
      path: '/add-family',
      element: <FamilyDetail />
    },
    {
      path: '/add-burn-cause',
      element: <BurnCauseDetail />
    },
    {
      path: '/add-burn-type',
      element: <BurnTypeDetail />
    },

    {
      path: '/user',
      element: <UserDetails />
    },

    {
      path: '/change-password',
      element: <ChangePassword />
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    }
    // {
    //   path: 'sample-page',
    //   element: <SamplePage />
    // },
    // {
    //   path: 'shadow',
    //   element: <Shadow />
    // },
    // {
    //   path: 'typography',
    //   element: <Typography />
    // },
    // {
    //   path: 'icons/ant',
    //   element: <AntIcons />
    // }
  ]
};

export default MainRoutes;
