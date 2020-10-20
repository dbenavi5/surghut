const mysql = require('serverless-mysql')

const db = mysql({
  config: {
    host: process.env.MYSQL_HOST || "db:3306",
    database: process.env.MYSQL_DATABASE || "team3",
    user: process.env.MYSQL_USER || "pierre",
    password: process.env.MYSQL_PASSWORD || "test",
  },
})

exports.query = async (query) => {
  try {
    const results = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    return { error }
  }
}