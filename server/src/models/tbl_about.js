module.exports = (sequelize, DataTypes) => {
  const about = sequelize.define("tbl_about", {
    id: {
      type: DataTypes.INTEGER(11),
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    heading: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    short_desc: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    long_desc: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  });
  return about
}