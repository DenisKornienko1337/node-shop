const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const Customer = sequelize.define('customer', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  cart_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
}, {
    timestamps: false
});

module.exports = Customer;