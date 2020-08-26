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
  googleId: {
    type: Sequelize.TEXT,
    allowNull: true
  },
}, {
    timestamps: false
});


module.exports = User;