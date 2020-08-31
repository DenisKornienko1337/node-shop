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
  paramsSchemaId: {
    type: Sequelize.INTEGER,
}
}, {
    timestamps: false
});

module.exports = Category;