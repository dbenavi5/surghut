const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const profile = await db.query(escape`
      SELECT *
      FROM Profile
    `);
    //console.log("result api: ", county);
  res.status(200).json({ profile })
}