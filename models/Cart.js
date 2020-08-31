const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/Cart')

const Cart = sequelize.define('cart', schema, additionales);

module.exports = Cart;