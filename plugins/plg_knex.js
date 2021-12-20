"use strict";

const fp = require("fastify-plugin");

module.exports = fp(async function (fastify, opts) {
  const attName = opts.name || 'knex'
  delete opts.name
  const handle = require("knex")(opts);
  try {
    fastify.decorate(attName, handle)
    fastify.addHook("onClose", (instance, done) => {
      if (instance[attName] === handle) {
        instance[attName].destroy();
        delete instance[attName];
      }
    });
  } catch (error) {
    Promise.reject(error);
  }
});

module.exports.autoConfig = { name: "db", client: "mysql2", connection: process.env.db , pool: { max: 10 } };
