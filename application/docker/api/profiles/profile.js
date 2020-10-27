const db = require('../../lib/db');
const escape = require('sql-template-string');

module.exports = async ( req, res ) => {
  const [profile] = await db.query( escape `
        SELECT  *
        FROM covid_19_cases
        WHERE incident_id = ${ req.query.incident_id }
    `);
  res.status(200).json({profile});
};
