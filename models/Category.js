const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    unique: true,
  },
}, {
    timestamps: false
});

module.exports = Category;