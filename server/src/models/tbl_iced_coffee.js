module.exports = (sequelize, DataTypes) => {
  const icedCoffee = sequelize.define("tbl_iced_coffee", {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      unique: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
  }, {
    timestamps: true,
  });
  return icedCoffee;
}