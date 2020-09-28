const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/Cart')
const Product = require('./Product')

const Cart = sequelize.define('cart', schema, additionales);
Cart.hasMany(Product, { onDelete: "cascade" })

module.exports = Cart;