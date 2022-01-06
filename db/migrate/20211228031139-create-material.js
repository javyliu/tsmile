'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('materials', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mtitle: {
        type: Sequelize.STRING
      },
      mtype: {
        type: Sequelize.INTEGER(1),
        comment: '1: 视频 2：ppt',
        defaultValue: 1
      },
      duration: {
        type: Sequelize.STRING(100),
        comment: '视频时间'
      },
      short_file_url: {
        type: Sequelize.STRING,
        comment: '试看文件'
      },
      file_url: {
        type: Sequelize.STRING
      },
      course_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      ord: {
        type: Sequelize.INTEGER,
        defaultValue: 0
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
    await queryInterface.addIndex("materials", ['course_id'])
    await queryInterface.addIndex("materials", ['user_id'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('materials');
  }
};