const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const User = sequelize.define('user', {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  hash: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = User;