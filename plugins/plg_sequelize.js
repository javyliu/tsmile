const fp = require('fastify-plugin')

module.exports = fp(async function (fastify, opts) {
  const db = require('../models')
  try {
    fastify.decorate('db', db)
    fastify.addHook("onClose", (instance, done) => {
      console.log("------关闭数据库连接-------")
      if (instance['db'] === db) {
        instance['db'].sequelize.close();
        delete instance['db'];
        done()
      }
    });
  } catch (error) {
    console.log("-----关闭数据库连接失败-------")
    Promise.reject(error);
  }
})
