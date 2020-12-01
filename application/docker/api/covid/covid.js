import api from '../api';


async function addCovidCase(user, nbCase, nbDeath,county) {
  const result = await api.post('covid/add', {user, nbCase, nbDeath, county});
  //console.log('addCovidCase ', result.data);
  return result.data.result;
}

async function cancelCovidCase(user, upload_time) {
  const result = await api.post('covid/cancel', {user, upload_time});
  //console.log('cancelCovidCase ', result.data);
  return result.data.result;
}

async function validateCovidCase(user, upload_time) {
  const result = await api.post('covid/validate', {user, upload_time});
  //console.log('validateCovidCase ', result.data);
  return result.data.result;
}

export {addCovidCase, cancelCovidCase, validateCovidCase};
