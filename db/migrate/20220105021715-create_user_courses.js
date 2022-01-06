'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('user_courses', {
      user_id: {
        type: Sequelize.INTEGER,       
      },
      course_id: {
        type: Sequelize.INTEGER,       
      }
    },{
      timestamps: false
    })

    await queryInterface.addIndex('user_courses', ['user_id'])
    await queryInterface.addIndex('user_courses', ['course_id'])
  },

  down: async (queryInterface, Sequelize) => {
   
    // await queryInterface.removeIndex('user_courses', ['user_id'])
    // await queryInterface.removeIndex('user_courses', ['course_id'])
    await queryInterface.dropTable('user_courses');
  }
};
