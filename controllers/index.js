const ApiController = require('./api')
const AuthController = require('./auth')
const CartController = require('./cart')
const CategoriesController = require('./categories')
const ProductsController = require('./products')
const MerchantProductsController = require('./Merchant/products')

module.exports = {
  ApiController, AuthController, CartController,
  CategoriesController, ProductsController,
  MerchantProductsController
}