import api from '../api';


async function addFireCase(user, nbCase, county) {
  const result = await api.post('fire/add', {user, nbCase, county});
  //console.log('addCovidCase ', result.data);
  return result.data.result;
}

async function cancelFiredCase(user, upload_time) {
  const result = await api.post('fire/cancel', {user, upload_time});
  //console.log('cancelCovidCase ', result.data);
  return result.data.result;
}

async function validateFireCase(user, upload_time) {
  const result = await api.post('fire/validate', {user, upload_time});
  //console.log('validateCovidCase ', result.data);
  return result.data.result;
}

export {addFireCase, cancelFiredCase, validateFireCase};
