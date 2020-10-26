const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
    //console.log("req.body = ", req.body);
    console.log("req.headers.cookie = ", req.headers.cookie);
    //console.log("req.body = ", req);

    //const profile = await db.query(escape`
    //  SELECT *
    //  FROM Profile P
    //  WHERE P.pseudo=${req.body.pseudo} AND P.password=${req.body.password}
    //`);
    //if (profile.length <= 0 || profile.length > 1) {
    //    res.status(200).json({ error : "wrong input" })
    //}
    //console.log("result api: ", answer);

    res.status(200).json({ lol : "lol" });
}