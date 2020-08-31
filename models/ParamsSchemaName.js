const {schema, additionales} = require('../schemas/ParamsSchemaName')
const sequelize = require('../utils/dbconnect');

const ParamsSchemaName = sequelize.define('params_schema_name', schema, additionales);

module.exports = ParamsSchemaName;