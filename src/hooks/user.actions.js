import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function useUserActions() {
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_API_URL;

  return {
    login,
    register,
    logout
  };

  // Login the user
  function login(data) {
    return axios.post(`${baseURL}/auth/login/`, data).then((res) => {
      // Registering the account and tokens in the store
      setUserData(res.data);
      navigate('/');
    });
  }

  // Register the user
  function register(data) {
    // return axios.post(`${baseURL}/auth/register/`, data).then(() => {
    //   // Registering the account and tokens in the store
    //   // setUserData(res.data);//if want to set this pass res from then
    //   navigate('/user');
    // });
    return axios.post(`${baseURL}/auth/register/`, data);
  }

  // Logout the user
  function logout() {
    localStorage.removeItem('auth');
    navigate('/login');
  }
}

// Get the user
function getUser() {
  const auth = JSON.parse(localStorage.getItem('auth')) || null;
  if (auth) {
    return auth.user;
  } else {
    return null;
  }
}

// Get the access token
function getAccessToken() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  return auth.access;
}

// Get the refresh token
function getRefreshToken() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  return auth.refresh;
}

// Set the access, token and user property
function setUserData(data) {
  localStorage.setItem(
    'auth',
    JSON.stringify({
      access: data.access,
      refresh: data.refresh,
      user: data.user
    })
  );
}

export { useUserActions, getUser, getAccessToken, getRefreshToken };
