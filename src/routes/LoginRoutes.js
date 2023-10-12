import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const ForgetPassword = Loadable(lazy(() => import('pages/authentication/ForgetPassword')));
const ResetPassword = Loadable(lazy(() => import('pages/authentication/ResetPassword')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <AuthLogin />
    },
    {
      path: 'forget-password',
      element: <ForgetPassword />
    },
    {
      path: 'reset-password/:uId/:uToken/',
      element: <ResetPassword />
    }
  ]
};

export default LoginRoutes;
