const db = require('../../../lib/db');
const escape = require('sql-template-strings');

module.exports = async (req, res) => {
  // //console.log("req = ", req);
  //console.log('req.body = ', req.body, req.body.user);
  const time = new Date().toISOString().slice(0, 19).replace('T', ' ').replace('Z', '');
  //console.log(time);


  const newProfile = await db.query(escape`
        INSERT INTO Mailbox (upload_time, sender, receiver, object, message)
        VALUES (${time}, ${req.body.user.pseudo}, ${req.body.receiver}, ${req.body.object}, ${req.body.message})
  ` );
  //console.log('result create use api: ', newProfile);

  // //console.log("req.header = ", req.header);
  res.status(200).json({result: 'Email sent'});
};
