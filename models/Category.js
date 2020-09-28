const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/Category')
const Product = require('./Product')
const ParamsSchema = require('./ParamsSchema')

const Category = sequelize.define('category', schema, additionales)
Category.hasMany(Product, { onDelete: "cascade" })
Category.hasMany(ParamsSchema, { onDelete: "cascade" })

module.exports = Category;