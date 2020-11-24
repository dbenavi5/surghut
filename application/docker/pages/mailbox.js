import React, {useState} from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {MailForm} from '../components/Form';

import Mail from '../components/Mail';
import Switch from '../components/Switch';

function MailBox() {

  const [mail, setMail] = useState(true);
  const [sent, setSent] = useState(false);


  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <Switch
              state={mail}
              onChange={setMail}
              nameTrue="mailbox"
              nameFalse="send email"
        />
        {mail ? 
        <Switch
          state={sent}
          onChange={setSent}
          nameTrue="sent"
          nameFalse="received"
        />
        :
         <></>}        
        {mail ? <Mail sent={sent} /> : <MailForm/>}
        
        
      </div>
    </ProtectRoute>
  );
}

export default MailBox;
