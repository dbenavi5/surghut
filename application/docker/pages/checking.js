import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {CovidCaseForm} from '../components/Form';

const db = require('../lib/db');
const escape = require('sql-template-strings');


function Checking({data}) {

    console.log("data", data);

  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <p>Checking page</p>
      </div>
    </ProtectRoute>
  );
}

export async function getServerSideProps({req, query}) {
    const county = await db.query(escape`
        SELECT *
        FROM Covid
    `);
  
    return {props: {data: county}};
  }

export default Checking;
