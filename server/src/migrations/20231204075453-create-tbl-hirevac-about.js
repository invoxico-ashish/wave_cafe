'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_hirevac_abouts', {
      about_id: {
        type: Sequelize.INTEGER(11),
        unique: true,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      about_desc: {
        type: Sequelize.STRING(255),
        allowNull: false,
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
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_hirevac_abouts');
  }
};