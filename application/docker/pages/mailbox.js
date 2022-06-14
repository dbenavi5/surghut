/* eslint-disable require-jsdoc */
import React, {useState} from 'react';
import {ProtectRoute} from '../contexts/auth';
import {MailForm} from '../components/form/Form';

import Mail from '../components/mail/Mail';
import Switch from '../components/switch/Switch';

function MailBox() {
  const [mail, setMail] = useState(true);
  const [sent, setSent] = useState(false);

  return (
    <ProtectRoute>
      <div className='container'>
        <Switch
          state={mail}
          onChange={setMail}
          nameTrue="mailbox"
          nameFalse="send email"
        />
        {mail ? (
          <Switch
            state={sent}
            onChange={setSent}
            nameTrue="sent"
            nameFalse="received"
          />
        ) : (
          <></>
        )}
        {mail ? <Mail sent={sent} /> : <MailForm />}
      </div>
    </ProtectRoute>
  );
}

export default MailBox;
