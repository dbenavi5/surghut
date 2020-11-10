const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // console.log("req = ", req);
  console.log('req.body = ', req.body);

  const county = await db.query(escape`
    UPDATE  County C
    SET C.evacuation_level = 0
    WHERE C.name = ${req.body.county}
    ` );

    console.log('result create use api: ', county);
  const newProfile = await db.query(escape`
        SELECT A.mail
        FROM Alert A
        WHERE A.county = ${req.body.county}
  ` );
  console.log('result create use api: ', newProfile);

  // console.log("req.header = ", req.header);
  res.status(200);
};