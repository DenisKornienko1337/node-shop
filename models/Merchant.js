const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const Merchant = sequelize.define('merchant', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
}, {
    timestamps: false
});

module.exports = Merchant;