const express = require('express')
const router  = express.Router()

const {
  ProductsController,
  CartController,
  MerchantProductsController
} = require('../controllers/index')

router.post('/delete', ProductsController.delete)

router.get('/', ProductsController.index)

router.get('/get-cart-products', ProductsController.getAllCartProducts)

router.get('/get-merchant-products', MerchantProductsController.getMerchantProducts)

router.post('/create', ProductsController.create)

router.post('/add-product-to-cart', CartController.addProductToCart)

router.post('/delete-product-from-cart', CartController.deleteProductFromCart)

module.exports = router