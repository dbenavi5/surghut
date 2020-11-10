import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {AlertRegisterForm, SendAlertForm, CancelAlertForm} from '../components/Form';

function Update() {
  

  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <p>protected page</p>
        <AlertRegisterForm/>
        <SendAlertForm/>
        <CancelAlertForm/>
      </div>
    </ProtectRoute>
  );
}

export default Update;
