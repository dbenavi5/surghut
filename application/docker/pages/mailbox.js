import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {MailForm} from '../components/Form';

function MailBox() {
  

  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <MailForm/>
      </div>
    </ProtectRoute>
  );
}

export default MailBox;