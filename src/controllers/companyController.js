import { $authHost, $host } from '../utils/httpConfig';
import axios from 'axios';

function login(props) {
  return $host.post('/company/signin', props)
    .then(getResponseData);
}

function register(props) {
  return $host.post('/company/signup', props)
    .then(getResponseData);
}

function getCompanyInfo() {
  return $authHost.get('/company/me')
    .then(getResponseData);
}

function getResponseData(res) {
  if (!(res.statusText === 'OK')) {
    return Promise.reject(res.data.message);
  }
  return res.data;
}
function checkInn(inn) {
  return axios.post(
      'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party',
      { query: inn },
    { headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Token c8974ae5321779b9eddc55afd02f9a660dec3f66"
    }, mode: "cors" })
    .then(getResponseData)
} 
export const companyController = {
  login,
  register,
  getCompanyInfo,
  checkInn
};