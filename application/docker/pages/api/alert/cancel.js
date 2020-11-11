const db = require('../../../lib/db');
const escape = require('sql-template-strings');

const nodemailer = require('nodemailer');

// create the list of contact for the mail to send
function createContact(mails) {
    let result = '';

    mails.forEach(function(data) {
        result = result + ',' + data.mail
    })

    return result;
}


module.exports = async (req, res) => {

  // create the mail api
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

  // sql request to update the county's level of alert in County database
  const county = await db.query(escape`
    UPDATE  County C
    SET C.evacuation_level = 0
    WHERE C.name = ${req.body.county}
    ` );

  // sql request to get all email of a county in Alert databse
  const mails = await db.query(escape`
        SELECT A.mail
        FROM Alert A
        WHERE A.county = ${req.body.county}
  ` );

  // create list of receiver
  const contact = createContact(mails);

  // create the mail to send
  const mailOptions = {
    from: '"SurgeHut" <surgehut@outlook.fr>', // sender address (who sends)
    to: contact, // list of receivers (who receives)
    subject: `Alert surgeHut ${req.body.county}`, // Subject line
    text: `The level of evacuation has return to normal in ${req.body.county} `
    };

  // send the mail
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.status(200);
};