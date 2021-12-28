'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('courses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ctitle: {
        type: Sequelize.STRING(200)
      },
      price: {
        type: Sequelize.DECIMAL(8,2)
      },
      expiry_date: {
        type: Sequelize.STRING(100),
        defaultValue: '',
        comment:'到期时间，空时表示永不过期'      
      },
      description: {
        type: Sequelize.STRING(800)
      },
      pic_img: {
        type: Sequelize.STRING,
        comment: '封面图片'
      },
      click_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '点击次数'
      },
      is_recommend: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        comment: '是否推荐'
      },
      clevel: {
        type: Sequelize.INTEGER(1),
        defaultValue: 1,
        comment: '开放会员级别: 1:基础会员，2:高级会员'
      },
      dtype: {
        type: Sequelize.INTEGER(4),
        defaultValue: 0,
        comment: '直播课程(1)|免费课程 (2), 两者都是:3'
      },
      category_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      ord: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: '排序'
      },
      process: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        comment: '课程是否完结'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('courses');
  }
};