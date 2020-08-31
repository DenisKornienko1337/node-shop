const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/ProductCart')

const ProductCart = sequelize.define('product_carts', schema, additionales);

module.exports = ProductCart;