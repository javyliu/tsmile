require('dotenv').config();
module.exports = {
  "development": {
    "username": "javy",
    "password": process.env.tsmile_pwd,
    "database": "tsmile",
    "host": process.env.host, 
    "dialect": "mysql"
  },
  "test": {
    "username": "javy",
    "password": process.env.tsmile_pwd,
    "database": "tsmile_test",
    "host": process.env.host, 
    "dialect": "mysql"
  },
  "production": {
    "username": "javy",
    "password": process.env.tsmile_pwd,
    "database": "tsmile",
    "host": process.env.host, 
    "dialect": "mysql"
  }
}
