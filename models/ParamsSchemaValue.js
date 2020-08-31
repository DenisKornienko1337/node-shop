const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const ParamsSchemaValue = sequelize.define('params_schema_value', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  value: {
    type: Sequelize.STRING,
  },
  paramNameId: {
      type: Sequelize.INTEGER,
  }
}, {
    timestamps: false
});

module.exports = ParamsSchemaValue;