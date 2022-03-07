require('dotenv').config();
module.exports = {
  "development": {
    "url": process.env.db,
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
    "url": process.env.db_pro,
    "dialect": "mysql"
  }
}
