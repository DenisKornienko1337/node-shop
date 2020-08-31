const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/Category')

const Category = sequelize.define('category', schema, additionales)

module.exports = Category;