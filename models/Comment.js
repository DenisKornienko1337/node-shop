const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const Comment = sequelize.define('comment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
  },
  customerId: {
      type: Sequelize.INTEGER
  },
  productId: {
      type: Sequelize.INTEGER
  },
  merchantId: {
      type: Sequelize.INTEGER
  },
  rate: {
      type: Sequelize.INTEGER
  },
}, {
    timestamps: false
});

module.exports = Comment;