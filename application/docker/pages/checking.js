import React from 'react';
import {ProtectRoute} from '../contexts/auth';

import Navbar from '../components/Navbar';
import {ValidateCovidCaseForm, ValidateFireCaseForm} from '../components/Form';

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
        upload_time={data.covid[0].upload_time}
        county={data.covid[0].county}
        nbCase={data.covid[0].nb_case}
        />
        <ValidateFireCaseForm
        upload_time={data.fire[0].upload_time}
        county={data.fire[0].county}
        nbCase={data.fire[0].nb_case}
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

    const fire = await db.query(escape`
        SELECT *
        FROM Fire F
        WHERE F.validate = 0
    `);
  
    return {props: {data: {covid, fire}}};
  }

export default Checking;
