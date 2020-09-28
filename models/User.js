const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/User')
const Product = require('./Product')
const Comment = require('./Comment')

const User = sequelize.define('user', schema, additionales);
User.hasMany(Product, { onDelete: "cascade" })
User.hasMany(Comment, { onDelete: "cascade" })
module.exports = User;