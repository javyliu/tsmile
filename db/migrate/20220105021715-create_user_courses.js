'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
    await queryInterface.createTable('UserCourses', {
      userId: {
        type: Sequelize.INTEGER,       
      },
      courseId: {
        type: Sequelize.INTEGER,       
      }
    },{
      timestamps: false
    })

    await queryInterface.addIndex('UserCourses', ['userId'])
    await queryInterface.addIndex('UserCourses', ['courseId'])
  },

  down: async (queryInterface, Sequelize) => {
   
    // await queryInterface.removeIndex('UserCourses', ['user_id'])
    // await queryInterface.removeIndex('UserCourses', ['course_id'])
    await queryInterface.dropTable('UserCourses');
  }
};
