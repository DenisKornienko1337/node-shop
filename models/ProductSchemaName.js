const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/ProductSchemaName')
const ProductSchemaItem = require('./ProductSchemaItem')

const ProductSchemaName = sequelize.define('product_schema_name', schema, additionales);
ProductSchemaName.hasMany(ProductSchemaItem, { onDelete: "cascade" })

module.exports = ProductSchemaName;