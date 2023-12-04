'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_hirevac_recents_jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tbl_hirevac_recents_jobs.init({
    job_id: {
      type: DataTypes.INTEGER(11),
      unique: true,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    job_desc: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    job_location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    job_salary_from: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    job_salary_to: {
      type: DataTypes.STRING(255),
      allowNull: false
    },

  }, {
    sequelize,
    modelName: 'tbl_hirevac_recents_jobs',
  });
  return tbl_hirevac_recents_jobs;
};