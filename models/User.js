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
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.TEXT,
    allowNull: false
  },
}, {
    timestamps: false
});

module.exports = User;