/* eslint-disable no-undef */
const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // console.log("req = ", req);
  // console.log('req.body = ', req.body, req.body.user);

  // eslint-disable-next-line no-unused-vars
  const newProfile = await db.query(escape`
  DELETE FROM Fire F
  WHERE F.upload_time=${req.body.upload_time}
  ` );
  // console.log('result create use api: ', newProfile);

  // //console.log("req.header = ", req.header);
  res.status(200).json({result: `Entry cancel`});
};
