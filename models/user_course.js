'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {
    static associate(models) {
     
    }
  };
  UserCourse.init({
    courseId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    // modelName: 'user_course',
    // underscored: true,
    timestamps: false,
  });
  return UserCourse;
};