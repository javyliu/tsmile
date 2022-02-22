require('dotenv').config();
module.exports = {
  "development": {
    "username": "javy",
    "password": process.env.tsmile_pwd,
    "database": "tsmile",
    "host": "192.168.30.33", 
    "port": "3306",
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
    "host": "10.0.224.9", 
    "port": "22679",
    "dialect": "mysql"
  }
}
