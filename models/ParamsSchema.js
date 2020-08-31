const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const ParamsSchema = sequelize.define('params_schema', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  categoryId: {
    type: Sequelize.INTEGER,
  },
}, {
    timestamps: false
});

module.exports = ParamsSchema;