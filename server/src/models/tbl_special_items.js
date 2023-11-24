module.exports = (sequelize, DataTypes) => {
  const specialItems = sequelize.define("tbl_special_items", {
    sp_id: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      primaryKey: true,
      unique: true
    },
    sp_title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    sp_desc: {
      type: DataTypes.STRING(100),
      allowNull: false,
    }
  }, {
    timestapms: true
  });
  return specialItems;
}