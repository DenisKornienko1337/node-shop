const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/ParamsSchema')

const ParamsSchema = sequelize.define('params_schema', schema, additionales);

module.exports = ParamsSchema;