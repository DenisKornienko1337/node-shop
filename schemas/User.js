const Sequelize = require('sequelize');

module.exports = {
  schema: {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    type: {
      type: Sequelize.STRING,
    },
    cartId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    merchantName: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    }
  },
  additionales: {
    timestamps: false
  }
}