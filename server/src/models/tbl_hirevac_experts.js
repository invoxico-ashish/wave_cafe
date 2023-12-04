'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_hirevac_experts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_hirevac_experts.init({
    exp_id: {
      type: DataTypes.INTEGER(11),
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'tbl_hirevac_experts',
  });
  return tbl_hirevac_experts;
};