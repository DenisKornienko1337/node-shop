const {schema, additionales} = require('../schemas/ParamsSchemaValue')
const sequelize = require('../utils/dbconnect');

const ParamsSchemaValue = sequelize.define('params_schema_value', schema, additionales);

module.exports = ParamsSchemaValue;