import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {CovidCaseForm, FireCaseForm} from '../components/Form';

function Update() {
  

  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <p>protected page</p>
        <CovidCaseForm/>
        <FireCaseForm/>
      </div>
    </ProtectRoute>
  );
}

export default Update;
