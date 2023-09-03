import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AddPatient from 'pages/patient/AddPatient';
import ProtectedRoute from './ProtectedRoute';
import PatientList from 'pages/patient_list/PatientList';
import PatientDetail from 'pages/patient_list/PatientDetail';
import PatientReport from 'pages/patient_report/PatientReport';
import PatienSearchtList from 'pages/patient_search/PatientSearchList';
import PatientTreatmentDetail from 'pages/patient_treatment/PatientTreatmentDetail';
import PatientPhychosocialDetail from 'pages/patient_phychosocial/PatientPhychosocialDetail';
import PatientPhysiotherapyDetail from 'pages/patient_physiotherapy/PatientPhysiotherapyDetail';
import PatientDonorDetail from 'pages/patient_donor/PatientDonorDetail';
import PatientCostDetail from 'pages/patient_cost/PatientCostDetail';
import DonorDetail from 'pages/add-extra/donor/DonorDetail';
import OccupationDetail from 'pages/add-extra/occupation/OccupationDetail';
import EthnicDetail from 'pages/add-extra/ethnic/EthnicDetail';
import ReligionDetail from 'pages/add-extra/religion/ReligionDetail';
import FamilyDetail from 'pages/add-extra/family/FamilyDetail';
import UserDetails from 'pages/users_details/UserDetails';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

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
    {
      path: 'color',
      element: <Color />
    },

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
      path: '/patient/cost/:patientId/',
      element: <PatientCostDetail />
    },
    {
      path: '/patient-report',
      element: <PatientReport />
    },
    {
      path: '/add-donor',
      element: <DonorDetail />
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
      path: '/user',
      element: <UserDetails />
    },

    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'icons/ant',
      element: <AntIcons />
    }
  ]
};

export default MainRoutes;
