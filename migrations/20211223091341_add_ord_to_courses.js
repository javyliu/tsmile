
exports.up = function(knex) {
  return knex.schema.table("courses", function (table) {
    table.integer('ord').defaultTo(0).comment("用于排序")
  })  
};

exports.down = function(knex) {
  return knex.schema.table("courses", function (table) {
    table.dropColumn('ord')
  })  
};
