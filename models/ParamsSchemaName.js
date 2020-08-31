const Sequelize = require('sequelize');
const sequelize = require('../utils/dbconnect');

const ParamsSchemaName = sequelize.define('params_schema_name', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
  },
}, {
    timestamps: false
});

module.exports = ParamsSchemaName;