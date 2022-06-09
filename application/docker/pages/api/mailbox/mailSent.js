/* eslint-disable max-len */
/* eslint-disable no-undef */
const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // //console.log("req.body = ", req.body);
  // console.log('req.cookies.token.token = ', req.cookies.token);
  // //console.log("req.body = ", req);

  const mails = await db.query(escape`
      SELECT *
      FROM Mailbox M
      WHERE M.sender= (SELECT P.pseudo FROM Profile P WHERE P.access_token=${req.cookies.token} )
    `);

  res.status(200).json({mails});
};
