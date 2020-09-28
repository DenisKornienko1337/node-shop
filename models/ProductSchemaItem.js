const sequelize = require('../utils/dbconnect');
const {schema, additionales} = require('../schemas/ProductSchemaItem')

const ProductSchemaItem = sequelize.define('product_schema_item', schema, additionales);

module.exports = ProductSchemaItem;