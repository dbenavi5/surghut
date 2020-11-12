import api from '../api';

// save mail and county in the Alert database

async function registerAlert(mail, county) {
  const result = await api.post('alert/create', {mail, county});
  console.log(result);
}

// send an alert to all user in a county
// the parameter user is the information of the current user conected to allow this action

async function sendAlert(user, county, level) {
  const result = await api.post('alert/send', {user, county, level});
  console.log(result);
}

// cancel an alert to all user in a county
// the parameter user is the information of the current user conected to allow this action

async function cancelAlert(user, county) {
  const result = await api.post('alert/cancel', {user, county});
  console.log(result);
}

export {registerAlert, sendAlert, cancelAlert};
