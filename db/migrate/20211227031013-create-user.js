'use strict';
/**
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      real_name: {
        type: Sequelize.STRING(100)     

      },
      head_pic: {
        type: Sequelize.STRING
      },
      pwd: {
        type: Sequelize.STRING(50)
      },
      title: {
        type: Sequelize.STRING,
        comment: '职称'
      },
      desc: {
        type: Sequelize.TEXT,
        comment: '简介'
      },
      sign: {
        type: Sequelize.STRING
      },
      token: {
        type: Sequelize.STRING
      },
      points: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      sex: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      phone: {
        type: Sequelize.STRING(15)
      },
      ulevel: {
        type: Sequelize.INTEGER(2),
        defaultValue: 0,
        comment:"位表示法，用户等级: 1:基础会员，2:高级会员，8: 讲师，10:讲师，高级会员"
      },
      company: {
        type: Sequelize.STRING
      },
      wechat_name: {
        type: Sequelize.STRING(50)
      },
      address: {
        type: Sequelize.STRING
      },
      job: {
        type: Sequelize.STRING
      },
      ord: {
        type: Sequelize.INTEGER,
        comment: '排序,从大到小',
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};