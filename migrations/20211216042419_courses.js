
exports.up = function(knex) {
  return knex.schema.createTable("courses", (table) => {
    table.increments("id")
    table.string("ctitle", 100)
    table.decimal("price", 8,2)
    
    table.string("expiry_date").defaultTo('').comment('到期时间，空时表示永不过期')
    table.string("description", 800)
    table.string("pic_img").comment("封面图片")
    table.integer("click_count").defaultTo(0).comment('点击次数')
    table.boolean("is_recommend").defaultTo(0).comment('是否推荐')
    
    table.integer("clevel",1).defaultTo(1).comment("开放会员级别: 1:基础会员，2:高级会员")
    table.integer("dtype",4).defaultTo(0).comment("直播课程(1)|免费课程 (2), 两者都是:3")
    
    table.integer("category_id").unsigned()
    table.foreign("category_id").references("categories.id")
    
    table.integer("user_id",11).unsigned()
    table.foreign("user_id").references("users.id")

    table.boolean("process").comment("课程是否完结")

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("courses")
};
