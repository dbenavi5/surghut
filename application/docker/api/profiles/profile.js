// parses the request query parameter
// uses the query params  to select a single profile from  db
// sends the  retrieved profile as a response

const db = require('../../lib/db');
const escape = require('sql-template-string');

module.exports = async ( req, res ) => {
    const [profile] = await db.query( escape `
        SELECT  *
        FROM covid_19_cases
        WHERE incident_id = ${ req.query.incident_id }
    `)
    res.status(200).json({ profile })
}