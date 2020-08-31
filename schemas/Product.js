const Sequelize = require('sequelize');

module.exports = {
  schema: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    merchantId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    categoryId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    price: {
      type: Sequelize.FLOAT,
      allowNull: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true
    },
  },
  additionales: {
    timestamps: false
  }
}