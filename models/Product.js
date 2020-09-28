const {schema, additionales} = require('../schemas/Product')
const sequelize = require('../utils/dbconnect');
const Comment = require('./Comment')
const ProductSchemaName = require('./ProductSchemaName')
// const Category = require('./Category')

const Product = sequelize.define('product', schema, additionales);
Product.hasMany(Comment, { onDelete: "cascade" })
Product.hasMany(ProductSchemaName, { onDelete: "cascade" })
// Product.hasOne(Category)
// Category.hasMany(Product)

module.exports = Product;