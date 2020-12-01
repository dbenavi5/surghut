import React, {useState, useEffect} from 'react';
import {useAuth} from '../contexts/auth';

import styles from './Mail.module.css';

import Switch from './Switch';

import api from '../api/api';

function MailItem({data}) {

  const [show, setShow] = useState(false);


  return (
    <div className={styles.container}>
      <div className={styles.horizontal}>
        <p className={styles.text}>receiver : {data.receiver}</p>
        <p className={styles.text}>sender : {data.sender}</p>
      </div>
      <p className={styles.text} >sent at {data.upload_time}</p>
      <div className={styles.horizontal}>
        <p className={styles.text}>object : {data.object}</p>
        <Switch
                state={show}
                onChange={setShow}
                nameTrue="Show"
                nameFalse="Hide"
        />
      </div>
      {show ?
        <div className={styles.container}>
          <p>{data.message}</p>
        </div> 
         : <></>}
      
    </div>
  );
}

function Mail({sent}) {

  const [mailReceived, setMailReceived] = useState([]);
  const [mailSent, setMailSent] = useState([]);

  useEffect( () => {
    async function getMail() {
      const {data: mailsReceived} = await api.post('mailbox/mailReceived');
      setMailReceived(mailsReceived.mails);
      //console.log("mailReceived = ", mailsReceived)

      const {data: mailsSent} = await api.post('mailbox/mailSent');
      setMailSent(mailsSent.mails);
      //console.log("mailSent = ", mailsSent)
    }
    getMail();
  }, []);


  if (sent) {
    return (
      <div>
        {mailSent.map((data) =>
        <MailItem
          key={data.upload_time}
          data={data}
        />
      )}
      </div>
    );
  }
  else {
      return (
        <div>
          {mailReceived.map((data) =>
            <MailItem
              key={data.upload_time}
              data={data}
            />
          )}
        </div>
      );
      }
}

export default Mail;
