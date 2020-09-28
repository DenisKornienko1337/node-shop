const {schema, additionales} = require('../schemas/ParamsSchemaName')
const sequelize = require('../utils/dbconnect');
const ParamsSchemaValue = require('./ParamsSchemaValue')

const ParamsSchemaName = sequelize.define('params_schema_name', schema, additionales);
ParamsSchemaName.hasMany(ParamsSchemaValue, { onDelete: "cascade" })

module.exports = ParamsSchemaName;