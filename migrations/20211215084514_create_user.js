
exports.up = function(knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name", 100);
    table.string("real_name", 100);
    table.string("pwd", 50);
    table.string("title");
    table.string("desc", 800);
    table.string("sign");
    table.string("token");
    table.integer('points').defaultTo(0)
    table.boolean('sex').defaultTo(0)
    table.string('company')
    table.string('wechat_name',50)
    table.string('address')
    table.string('job')
    // table.timestamps(true,true)
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

  })
};

exports.down = function(knex) {
    return knex.schema.dropTable("users");

};
