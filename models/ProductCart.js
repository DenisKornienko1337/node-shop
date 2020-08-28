const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const ProductCart = sequelize.define('product_carts', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  cartId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
}, {
    timestamps: false
});

module.exports = ProductCart;