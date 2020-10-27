// This file[API] performs the following functions:
// parses requeste, uses query parameter to determine profiles required
// request only the required profiles  from the database,
// queries the database to get the total results,
// uses  record count to calculate pagination
// sends the retrieved  profiles as a response

const db = require( '../../lib/db' );
const escape = require( 'sql-template-strings' );

module.exports = async ( req, res ) => {
  let page = parseInt( req.query.page ) || 1;
  const limit = parseInt( req.query.limit ) || 9;
  if ( page < 1 ) page = 1;
  const profiles = await db.query( escape`
        SELECT *
        FROM profiles
        ORDER BY incident_id
        LIMIT ${ ( page - 1 ) * limit }, ${ limit }
    `);

  const count = await db.query( escape `
        SELECT COUNT(*)
        AS profilesCount
        FROM profiles
    `);

  const {profilesCount} = count[0];
  const pageCount = Math.ceil( profilesCount / limit );
  re.status(200).json({profiles, pageCount, page});
};
