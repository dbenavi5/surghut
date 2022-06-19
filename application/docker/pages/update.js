/* eslint-disable object-curly-spacing */
/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
import React from 'react';
import { ProtectRoute } from '../contexts/auth';
import { CovidCaseForm, FireCaseForm } from '../components/form/Form';

const db = require('../lib/db');
const escape = require('sql-template-strings');

// eslint-disable-next-line react/prop-types
function Update({ data }) {
  return (
    <ProtectRoute accessLevel={1}>
      <div className='container'>
        <CovidCaseForm idData="Covid" dataCounty={data} />
        <FireCaseForm dataCounty={data} idData="Fire" />
      </div>
    </ProtectRoute>
  );
}

export async function getServerSideProps({ req, query }) {
  const county = await db.query(escape`
      SELECT *
      FROM County
  `);

  return { props: { data: county } };
}

export default Update;
