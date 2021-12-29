'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/database.js')[env];
const db = {};
const pageSize = 10;
let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
  //添加per方法用来设置页面大小
  db[modelName].per = function(psize){
    this.psize = psize
    return this
  }
  //添加page scope 用于分页,默认每页 10 项
  db[modelName].addScope('page', function(curPage) {
    let page_size = this.psize || pageSize
    return {
      limit: page_size,
      offset: ( curPage - 1 ) * page_size
    }
  })
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
