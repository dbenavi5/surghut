import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {AlertRegisterForm, SendAlertForm, CancelAlertForm} from '../components/Form';

const db = require('../lib/db');
const escape = require('sql-template-strings');

// alert page
// data is the information of all county get from the County database

function Alert({data}) {
  return (
      <div>
        <Navbar/>
        <AlertRegisterForm
          idData="County"
          dataCounty={data}
        />
        <ProtectRoute
          accessLevel={2}
        >
          <SendAlertForm
            idData="County2"
            dataCounty={data}
          />
          <CancelAlertForm
            idData="County3"
            dataCounty={data}
          />
        </ProtectRoute>
      </div>
  );
}

// get all county information in the County database for this page

export async function getServerSideProps({req, query}) {
  const county = await db.query(escape`
        SELECT *
        FROM County
    `);

  return {props: {data: county}};
}


export default Alert;
