const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/Comment')

const Comment = sequelize.define('comment', schema, additionales);

module.exports = Comment;