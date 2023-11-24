module.exports = (sequelize, DataTypes) => {
  const AttchmentRecord = sequelize.define("tbl_attchments", {
    attachment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true
    },
    attachment_mod_key: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    attachment_record_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    attachment_phy_path: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    attachment_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {
    createdAt: "attachment_added_at",
    updatedAt: "attachment_updated_at"
  });
  return AttchmentRecord;
}