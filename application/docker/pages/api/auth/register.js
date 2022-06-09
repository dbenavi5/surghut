/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // console.log("req = ", req);
  // console.log('req.body = ', req.body);
  // console.log("req.header = ", req.header);

  const token =
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
  const profile = await db.query(escape`
      SELECT *
      FROM Profile P
      WHERE P.pseudo=${req.body.pseudo}
    `);
  if (profile.length > 0) {
    res.status(200).json({error: 'pseudo already taken'});
  }
  const newProfile = await db.query(escape`
        INSERT INTO Profile (pseudo, mail, password)
        VALUES (${req.body.pseudo}, ${req.body.mail}, ${req.body.password})
  `);
  // console.log('result create use api: ', newProfile);

  const answer = await db.query(escape`
        UPDATE Profile P
        SET
            access_token = ${token}
        WHERE P.pseudo=${req.body.pseudo} AND P.password=${req.body.password}
`);
  // console.log('result api: ', answer);

  res.status(200).json({token});
};
