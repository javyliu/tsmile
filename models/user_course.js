'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserCourse extends Model {  
    static associate(models) {
     
    }
  };
  UserCourse.init({}, {
    sequelize,
    modelName: 'UserCourse',
    underscored: true,
    timestamps: false,
  });
  return UserCourse;
};