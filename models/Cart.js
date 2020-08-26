const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const Cart = sequelize.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  customer_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
}, {
    timestamps: false
});

module.exports = Cart;