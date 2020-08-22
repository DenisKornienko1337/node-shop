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