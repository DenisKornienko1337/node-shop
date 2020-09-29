const express = require('express')
const router  = express.Router()

const {
  ProductsController,
  CartController,
  MerchantProductsController
} = require('../controllers/index')

router.post('/delete-product', ProductsController.deleteProduct)

router.get('/get-all-products', ProductsController.getAllProducts)

router.get('/get-cart-products', ProductsController.getAllCartProducts)

router.get('/get-merchant-products', MerchantProductsController.getMerchantProducts)

router.post('/add-product', ProductsController.addProduct)

router.post('/add-product-to-cart', CartController.addProductToCart)

router.post('/delete-product-from-cart', CartController.deleteProductFromCart)

module.exports = router