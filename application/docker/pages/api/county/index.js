const db = require('../../../lib/db')
const escape = require('sql-template-strings')

module.exports = async (req, res) => {
  const county = await db.query(escape`
      SELECT *
      FROM county_cases
    `);
    //console.log("result api: ", county);
  res.status(200).json({ county })
}