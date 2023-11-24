'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_abouts', {
      id: {
        type: Sequelize.INTEGER(11),
        unique: true,
        autoIncrement: true,
        primaryKey: true
      },
      heading: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      short_desc: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      long_desc: {
        type: Sequelize.STRING(100),
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
    await queryInterface.dropTable('tbl_abouts');
  }
};