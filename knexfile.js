// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'mysql2',
    pool: {//默认就是2-10
      min: 2,
      max: 10
    },
    connection: process.env.db,
    migrations: {
      tableName: 'knex_migrations'
    }
  },


  production: {
    client: 'mysql2',
    connection: process.env.db_pro,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
