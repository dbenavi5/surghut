/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import {ProtectRoute} from '../contexts/auth';
import {
  ValidateCovidCaseForm,
  ValidateFireCaseForm,
} from '../components/form/Form';

const db = require('../lib/db');
const escape = require('sql-template-strings');

const Checking = ({data}) => {
  // console.log('data', data);

  return (
    <ProtectRoute accessLevel={2}>
      <div>
        {data.covid.map((data) => (
          <ValidateCovidCaseForm
            key={data.upload_time}
            upload_time={data.upload_time}
            county={data.county}
            nbCase={data.nb_case}
            nbDeath={data.nb_death}
          />
        ))}

        {data.fire.map((data) => (
          <ValidateFireCaseForm
            key={data.upload_time}
            upload_time={data.upload_time}
            county={data.county}
            nbCase={data.nb_case}
          />
        ))}
      </div>
    </ProtectRoute>
  );
};

export const getServerSideProps = async ({req, query}) => {
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
};

export default Checking;
