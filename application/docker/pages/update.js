import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';

function Update() {
  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <p>protected page</p>
      </div>
    </ProtectRoute>
  );
}

export default Update;
