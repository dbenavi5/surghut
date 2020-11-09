import api from '../api';


async function addCovidCase(user, nbCase, county) {
    const result = await api.post('covid/add', {user, nbCase, county});
    console.log("addCovidCase ", result);
}

export {addCovidCase}