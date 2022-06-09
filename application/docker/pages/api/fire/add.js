/* eslint-disable max-len */
/* eslint-disable no-undef */
const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // //console.log("req = ", req);
  // console.log('req.body = ', req.body, req.body.user);
  const time = new Date().toISOString().slice(0, 19).replace('T', ' ').replace('Z', '');
  // console.log(time);

  // eslint-disable-next-line no-unused-vars
  const newProfile = await db.query(escape`
        INSERT INTO Fire (upload_time, nb_case, county)
        VALUES (${time}, ${req.body.nbCase}, ${req.body.county})
  ` );
  // console.log('result create use api: ', newProfile);

  // console.log("req.header = ", req.header);
  res.status(200).json({result: `New entry of ${req.body.nbCase} case in ${req.body.county}`});
};
