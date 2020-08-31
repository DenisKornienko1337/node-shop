const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/User')

const User = sequelize.define('user', schema, additionales);

module.exports = User;