import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {ValidateCovidCaseForm} from '../components/Form';

const db = require('../lib/db');
const escape = require('sql-template-strings');


function Checking({data}) {

    console.log("data", data);

  return (
    <ProtectRoute>
      <div>
        <Navbar/>
        <p>Checking page</p>
        <ValidateCovidCaseForm
        upload_time={data[0].upload_time}
        county={data[0].county}
        nbCase={data[0].nb_case}
        />
      </div>
    </ProtectRoute>
  );
}

export async function getServerSideProps({req, query}) {
    const covid = await db.query(escape`
        SELECT *
        FROM Covid C
        WHERE C.validate = 0
    `);
  
    return {props: {data: covid}};
  }

export default Checking;
