import api from '../api';


async function addCovidCase(user, nbCase, county) {
    const result = await api.post('covid/add', {user, nbCase, county});
    console.log("addCovidCase ", result);
}

async function cancelCovidCase(user, upload_time) {
    const result = await api.post('covid/cancel', {user, upload_time});
    console.log("cancelCovidCase ", result);
}

async function validateCovidCase(user, upload_time) {
    const result = await api.post('covid/validate', {user, upload_time});
    console.log("validateCovidCase ", result);
}

export {addCovidCase, cancelCovidCase, validateCovidCase}