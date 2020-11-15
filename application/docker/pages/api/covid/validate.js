const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // console.log("req = ", req);
  console.log('req.body = ', req.body, req.body.user);
  const time = new Date().toISOString().slice(0, 19).replace('T', ' ');
  console.log(time);

  const newProfile = await db.query(escape`
  UPDATE Covid C
  SET
    validate = 1
  WHERE C.upload_time=${req.body.upload_time}
  ` );
  console.log('result create use api: ', newProfile);

  const update = await db.query(escape`
  UPDATE County C
  SET
  C.covide_case = (SELECT C.nb_case FROM Covid C WHERE C.upload_time=${req.body.upload_time}),
  C.covide_death = (SELECT C.nb_death FROM Covid C WHERE C.upload_time=${req.body.upload_time})
  WHERE C.name= (SELECT C.county FROM Covid C WHERE C.upload_time=${req.body.upload_time})
  ` );

  // console.log("req.header = ", req.header);
  res.status(200);
};
