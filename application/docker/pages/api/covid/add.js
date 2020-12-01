const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // //console.log("req = ", req);
  //console.log('req.body = ', req.body, req.body.user);
  const time = new Date().toISOString().slice(0, 19).replace('T', ' ').replace('Z', '');
  //console.log(time);

  const newProfile = await db.query(escape`
        INSERT INTO Covid (upload_time, nb_case, county, nb_death)
        VALUES (${time}, ${req.body.nbCase}, ${req.body.county}, ${req.body.nbDeath})
  ` );
  //console.log('result create use api: ', newProfile);

  // //console.log("req.header = ", req.header);
  res.status(200).json({result: `New entry of ${req.body.nbCase} case and ${req.body.nbDeath} death in ${req.body.county}`});

};
