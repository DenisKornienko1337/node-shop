const {schema, additionales} = require('../schemas/Product')
const sequelize = require('../utils/dbconnect');

const Product = sequelize.define('product', schema, additionales);


// Product.hasOne(Category)
// Category.hasMany(Product)

module.exports = Product;