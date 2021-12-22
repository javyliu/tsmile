"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {

  fastify.register(require('fastify-axios'), {
    clients: {
      wx: {
        baseURL: 'http://api.weixin.qq.com/',
      },
      pip: {
        baseURL: 'http://m.pipgame.com/api/v1'
      }
    }
  })
  
});
