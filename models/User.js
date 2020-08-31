const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');
const Product = require('../models/Product')

const User = sequelize.define('user', {
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
}, {
    timestamps: false
});


module.exports = User;