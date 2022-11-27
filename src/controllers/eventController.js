import { $authHost } from '../utils/httpConfig';


function getEvents() {
  return $authHost.get('/events')
    .then(getResponseData);
}
function createEvent(data) {
  return $authHost.post('/events', data)
    .then(getResponseData);
}
function changeEventStatus(id, status) {
  return $authHost.put(`/events/${id}/status`, status)
    .then(getResponseData);
}
function getResponseData(res) {
  if (!(res.statusText === 'OK')) {
    return Promise.reject(res.data.message);
  }
  return res.data;
}

export const eventController = {
  getEvents,
  createEvent,
  changeEventStatus,
};