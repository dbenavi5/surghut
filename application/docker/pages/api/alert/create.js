const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // console.log("req = ", req);
  console.log('req.body = ', req.body);

  const newProfile = await db.query(escape`
        INSERT INTO Alert (mail, county)
        VALUES (${req.body.mail}, ${req.body.county})
  ` );
  console.log('result create use api: ', newProfile);

  // console.log("req.header = ", req.header);
  res.status(200);
};