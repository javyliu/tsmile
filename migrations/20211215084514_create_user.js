
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("name", 100).unique();
    table.string("real_name", 100);
    table.string("head_pic");
    table.string("pwd", 50);
    table.string("title").comment("职称");
    table.string("desc", 800).comment("简介");
    table.string("sign");
    table.string("token");
    table.integer('points').defaultTo(0)
    table.integer('sex', 1).defaultTo(0)
    table.string('phone', 15)
    table.integer('ulevel', 2).defaultTo(1).comment("位表示法，用户等级: 1:基础会员，2:高级会员，8: 讲师，10:讲师，高级会员")
    table.string('company')
    table.string('wechat_name', 50)
    table.string('address')
    table.string('job')
    table.integer('ord').comment('排序,从大到小')
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
