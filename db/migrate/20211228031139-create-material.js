'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Materials', {
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
      shortFileUrl: {
        type: Sequelize.STRING,
        comment: '试看文件'
      },
      fileUrl: {
        type: Sequelize.STRING
      },
      courseId: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER
      },
      ord: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addIndex("Materials", ['courseId'])
    await queryInterface.addIndex("Materials", ['userId'])
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Materials');
  }
};