/* eslint-disable no-undef */
const mysql = require('serverless-mysql');

const db = mysql({
  config: {
    host: 'db',
    database: 'team3',
    user: 'pierre',
    password: 'test',
  },
});

exports.query = async (query) => {
  try {
    const results = await db.query(query);
    await db.end();
    // //console.log("mysql result: ", results);
    return results;
  } catch (error) {
    // //console.log("error mysql: ", error)
    return {error};
  }
};
