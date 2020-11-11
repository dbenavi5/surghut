import api from '../api';


async function sendMail(user, receiver, object, message) {
    const result = await api.post('mailbox/send', {user, receiver, object, message});
    console.log("addCovidCase ", result);
}

export {sendMail}