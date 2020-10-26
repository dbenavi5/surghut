const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    //console.log("req.body = ", req.body);
    console.log("req.cookies.token.token = ", req.cookies.token);
    //console.log("req.body = ", req);

    const profile = await db.query(escape`
      SELECT *
      FROM Profile P
      WHERE P.access_token=${req.cookies.token}
    `);
    console.log("result api: ", profile);

    res.status(200).json({ profile });
}