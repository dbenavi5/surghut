/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
// import {useAuth} from '../contexts/auth';

// import styles from './Mail.module.css';

import Switch from '../switch/Switch';

import api from '../../api/api';

const MailItem = ({data}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <div className="">
        <p>receiver : {data.receiver}</p>
        <p>sender : {data.sender}</p>
      </div>
      <p>sent at {data.upload_time}</p>
      <div className="">
        <p>object : {data.object}</p>
        <Switch
          state={show}
          onChange={setShow}
          nameTrue="Show"
          nameFalse="Hide"
        />
      </div>
      {show ? (
        <div className="">
          <p>{data.message}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Mail = ({sent}) => {
  const [mailReceived, setMailReceived] = useState([]);
  const [mailSent, setMailSent] = useState([]);

  useEffect(() => {
    const getMail = async () => {
      const {data: mailsReceived} = await api.post('mailbox/mailReceived');
      setMailReceived(mailsReceived.mails);
      // console.log("mailReceived = ", mailsReceived)
      const {data: mailsSent} = await api.post('mailbox/mailSent');
      setMailSent(mailsSent.mails);
      // console.log("mailSent = ", mailsSent)
    };
    getMail();
  }, []);

  if (sent) {
    return (
      <div>
        {mailSent.map((data) => (
          <MailItem key={data.upload_time} data={data} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        {mailReceived.map((data) => (
          <MailItem key={data.upload_time} data={data} />
        ))}
      </div>
    );
  }
};

export default Mail;
