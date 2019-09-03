const fs = require('fs');

module.exports = {
  development: {
    username: "development",
    password: "development",
    database: "excuse_rolodex",
    host: '127.0.0.1',
    port: 2345,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_TEST_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      // ssl: {
      //   ca: fs.readFileSync(__dirname + '/mysql-ca-master.crt')
      // }
    }
  }
};