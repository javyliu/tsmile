'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')
require('dotenv').config()
/**
 * setup some routes
 * @param {import("fastify").FastifyInstance} fastify 
 * @param {*} opts 
 */
module.exports = async function (fastify, opts) {
  
  console.log("=========opts: ", opts);

  fastify.ready(() => {
    console.log(fastify.printRoutes())

  })
  // Do not touch the following lines
  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({ prefix: '/v1'}, opts)
  })
}
//使用fastify start 启动时，可以在此设置fastify启动时的自定义选项，但必须加上 -o 参数
module.exports.options = {
  // ignoreTrailingSlash: true,
  maxParamLength: 200,
};
