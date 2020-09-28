const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/ParamsSchema')
const ParamsSchemaName = require('./ParamsSchemaName')

const ParamsSchema = sequelize.define('params_schema', schema, additionales);
ParamsSchema.hasMany(ParamsSchemaName, { onDelete: "cascade" })

module.exports = ParamsSchema;