'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config, {
    logging: false, timezone: '+05:30'
  });
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.icedCoffee = require("./tbl_iced_coffee")(sequelize, DataTypes);
db.attachment = require("./tbl_attchments")(sequelize, DataTypes);
db.about = require("./tbl_about")(sequelize, DataTypes);
db.spItems = require("./tbl_special_items")(sequelize, DataTypes);
db.hirevacAbout = require("./tbl_hirevac_about")(sequelize, DataTypes);
db.hirevacJob = require("./tbl_hirevac_recents_jobs")(sequelize, DataTypes);


db.icedCoffee.hasMany(db.attachment, { foreignKey: "attachment_record_id", as: "attachments" });
db.attachment.belongsTo(db.icedCoffee, { foreignKey: "attachment_record_id", as: "attachments" });
db.about.hasMany(db.attachment, { foreignKey: "attachment_record_id", as: "attachmentAbout" });
db.attachment.belongsTo(db.about, { foreignKey: "attachment_record_id", as: "attachmentAbout" });
db.spItems.hasMany(db.attachment, { foreignKey: "attachment_record_id", as: "attachmentspecial" });
db.attachment.belongsTo(db.spItems, { foreignKey: "attachment_record_id", as: "attachmentspecial" });
db.hirevacAbout.hasMany(db.attachment, { foreignKey: "attachment_record_id", as: "hirevacaboutattachments" });
db.attachment.belongsTo(db.hirevacAbout, { foreignKey: "attachment_record_id", as: "hirevacaboutattachments" });
db.hirevacJob.hasMany(db.attachment, { foreignKey: "attachment_record_id", as: "hirevacjobattachments" });
db.attachment.belongsTo(db.hirevacJob, { foreignKey: "attachment_record_id", as: "hirevacjobattachments" });


module.exports = db;
