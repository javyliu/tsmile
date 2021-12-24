require('dotenv').config();
module.exports = {
  "development": {
    "username": "javy",
    "password": process.env.tsmile_pwd,
    "database": "tsmile",
    "host": "192.168.30.33",
    "dialect": "mysql"
  },
  "test": {
    "username": "javy",
    "password": process.env.tsmile_pwd,
    "database": "tsmile_test",
    "host": "192.168.30.33",
    "dialect": "mysql"
  },
  "production": {
    "username": "javy",
    "password": process.env.tsmile_pwd,
    "database": "tsmile",
    "host": "192.168.30.33",
    "dialect": "mysql"
  }
}
