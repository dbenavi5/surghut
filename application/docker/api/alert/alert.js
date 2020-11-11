import api from '../api';


async function registerAlert(mail, county) {
    const result = await api.post('alert/create', {mail, county});
    console.log("addCovidCase ", result);
}
async function sendAlert(user, county, level) {
    const result = await api.post('alert/send', {user, county, level});
    console.log("addCovidCase ", result);
}

async function cancelAlert(user, county) {
    const result = await api.post('alert/cancel', {user, county});
    console.log("addCovidCase ", result);
}

export {registerAlert, sendAlert, cancelAlert}