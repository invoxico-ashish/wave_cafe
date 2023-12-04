'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_hirevac_about extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_hirevac_about.init({
    about_id: {
      type: DataTypes.INTEGER(11),
      unique: true,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    about_desc: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'tbl_hirevac_about',
    timestamps:true
  });
  return tbl_hirevac_about;
};