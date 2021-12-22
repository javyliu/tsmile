"use strict";

const fp = require("fastify-plugin");

async function  plg_undici(fastify, opts) {
  const handle = require("undici");
  try {
    fastify.decorate('wxClient', new handle.Client('http://api.weixin.qq.com'))
    fastify.decorate('pipClient', new handle.Client('http://m.pipgame.com'))
    fastify.addHook("onClose", (instance, done) => {
      if (instance.wxClient) {
        instance.wxClient.close()
        delete instance['wxClient'];
      }
      if (instance.pipClient) {
        instance.pipClient.close()
        delete instance['pipClient'];
        
      }
      done()
    });
  } catch (error) {
    Promise.reject(error);
  }
}


module.exports = fp(plg_undici)
