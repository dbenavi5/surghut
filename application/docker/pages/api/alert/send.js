const db = require('../../../lib/db');
const escape = require('sql-template-strings');

const nodemailer = require('nodemailer');



module.exports = async (req, res) => {
  // console.log("req = ", req);
  console.log('req.body = ', req.body);

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'surgehut@outlook.fr',
        pass: '1Tigreblanc'
    }
    });

  const county = await db.query(escape`
    UPDATE  County C
    SET C.evacuation_level = ${req.body.county}
    WHERE C.name = ${req.body.county}
    ` );

    console.log('result create use api: ', county);
  const mails = await db.query(escape`
        SELECT A.mail
        FROM Alert A
        WHERE A.county = ${req.body.county}
  ` );
  console.log('result mail: ', mails ,mails.toString());

    const mailOptions = {
    from: '"SurgeHut" <surgehut@outlook.fr>', // sender address (who sends)
    to: 'docmurloc@gmail.com', // list of receivers (who receives)
    subject: `Alert surgeHut ${req.body.county}`, // Subject line
    text: `The level of evacuation has been up to ${req.body.level} in ${req.body.county} `
    //html: '<b>Hello world </b><br> This is the first email sent with Nodemailer in Node.js' // html body
    };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  // console.log("req.header = ", req.header);
  res.status(200);
};