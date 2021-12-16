
exports.up = function(knex) {
  return knex.schema.createTable("categories", (table) => {
    table.increments("id")
    table.string("stitle", 100)
    table.integer("parent_id", 2)

  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("categories")
};
