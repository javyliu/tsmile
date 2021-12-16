

exports.up = function (knex) {
  return knex.schema.createTable("materials", (table) => {
    table.increments("id")
    table.string('mtitle')
    table.integer("mtype", 1).defaultTo(1).comment("1: 视频 2：ppt")

    table.string('duration', 50)
    table.string('try_file_url').comment("试看url")
    table.string('file_url').comment("会员url")

    table.integer('course_id', 11).unsigned()
    table.foreign('course_id').references('courses.id')

    table.integer('user_id', 11).unsigned()
    table.foreign('user_id').references('users.id')

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))

  })
};

exports.down = function (knex) {
  return knex.schema.dropTable("materials")
};
