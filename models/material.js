'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Course)
      this.belongsTo(models.User)
    }
  };
  Material.init({
    mtitle: DataTypes.STRING,
    mtype: DataTypes.INTEGER,
    duration: DataTypes.STRING,
    short_file_url: DataTypes.STRING,
    file_url: DataTypes.STRING,
    course_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    ord: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Material',
    underscored: true
  });
  return Material;
};