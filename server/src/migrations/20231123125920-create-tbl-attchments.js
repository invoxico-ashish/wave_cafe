'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tbl_attchments', {
      attachment_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
      },
      attachment_mod_key: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      attachment_record_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
      },
      attachment_phy_path: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      attachment_name: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      attachment_added_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      attachment_updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tbl_attchments');
  }
};