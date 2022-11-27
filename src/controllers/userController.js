import { $authHost, $host } from '../utils/httpConfig';

function login(props) {
  return $host.post('/users/signin', props)
    .then(getResponseData);
}

function register(props) {
  return $host.post('/users/signup', props)
    .then(getResponseData);
}

function getUserInfo() {
  return $authHost.get('/users/me')
    .then(getResponseData);
}

function getResponseData(res) {
  if (!(res.statusText === 'OK')) {
    return Promise.reject(res.data.message);
  }
  return res.data;
}

export const userController = {
  login,
  register,
  getUserInfo,
};