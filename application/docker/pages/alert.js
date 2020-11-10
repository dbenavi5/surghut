import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {AlertRegisterForm, SendAlertForm, CancelAlertForm} from '../components/Form';

const db = require('../lib/db');
const escape = require('sql-template-strings');

function Alert({data}) {

    //console.log(data);

  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <AlertRegisterForm
        idData="County"
        dataCounty={data}
        />
        <SendAlertForm
        idData="County2"
        dataCounty={data}
        />
        <CancelAlertForm
        idData="County3"
        dataCounty={data}
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




export default Alert;
