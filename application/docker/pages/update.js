import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {CovidCaseForm, FireCaseForm} from '../components/Form';

const db = require('../lib/db');
const escape = require('sql-template-strings');

function Update({data}) {
  

  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <CovidCaseForm
        idData="Covid"
        dataCounty={data}
        />
        <FireCaseForm
        dataCounty={data}
        idData="Fire"
        />
      </div>
    </ProtectRoute>
  );
}

export async function getServerSideProps({req, query}) {
  const county = await db.query(escape`
      SELECT *
      FROM County
  `);

  return {props: {data: county}};
}

export default Update;
