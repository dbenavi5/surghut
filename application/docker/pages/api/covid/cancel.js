const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // console.log("req = ", req);
  console.log('req.body = ', req.body, req.body.user);

  const newProfile = await db.query(escape`
  DELETE FROM Covid C
  WHERE C.upload_time=${req.body.upload_time}
  ` );
  console.log('result create use api: ', newProfile);

  // console.log("req.header = ", req.header);
  res.status(200);
};
