const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');
const Category = require('../models/Category');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  cart_id: {
    type: Sequelize.INTEGER,
    allowNull: true, 
  },
  merchant_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  category_id: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: true
  },
}, {
    timestamps: false
});

// Product.hasOne(Category)
// Category.hasMany(Product)

module.exports = Product;