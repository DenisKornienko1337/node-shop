const Sequelize = require('sequelize');

module.exports = {
  schema: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    cartId: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  additionales: {
    timestamps: false
  }
}