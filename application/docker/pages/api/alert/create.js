const db = require('../../../lib/db');
const escape = require('sql-template-strings');

// api that save the mail and county of a user in the Alert database

module.exports = async (req, res) => {
  // sql request to save mail and county in Alert database
  const data = await db.query(escape`
        INSERT INTO Alert (mail, county)
        VALUES (${req.body.mail}, ${req.body.county})
  ` );

  res.status(200).json({result: `you will receive all alert in ${req.body.county}`});

};
