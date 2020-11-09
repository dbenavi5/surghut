const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // console.log("req = ", req);
  console.log('req.body = ', req.body, req.body.user);
  const time = new Date().toISOString().slice(0, 19).replace('T', ' ');
  console.log(time);

  const newProfile = await db.query(escape`
  UPDATE Fire F
  SET
    validate = 1
  WHERE F.upload_time=${req.body.upload_time}
  ` );
  console.log('result create use api: ', newProfile);

  // console.log("req.header = ", req.header);
  res.status(200);
};