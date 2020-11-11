import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {MailForm} from '../components/Form';

import Mail from '../components/Mail';

function MailBox() {
  

  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <MailForm/>
        <Mail/>
      </div>
    </ProtectRoute>
  );
}

export default MailBox;