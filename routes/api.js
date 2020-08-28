const express = require('express')
const router  = express.Router()
const apiController = require('../controllers/api')
let isAuth = require('../middleware/auth')

router.get('/get-all-categories', apiController.getAllCategories)

router.get('/get-all-products', apiController.getAllProducts)

router.get('/get-cart-products', apiController.getAllCartProducts)

router.get('/get-merchant-products', apiController.getMerchantProducts)

router.get('/get-category-products', apiController.getCategoryProducts)

router.post('/add-product', apiController.addProduct)

router.post('/add-category', apiController.addCategory)

router.post('/add-product-to-cart', apiController.addProductToCart)

router.post('/delete-product-from-cart', apiController.deleteProductFromCart)

router.post('/delete-all-from-cart', apiController.deleteAllFromCart)

router.post('/delete-product', apiController.deleteProduct)

router.post('/delete-category', apiController.deleteCategory)

router.get('/user', (req, res) => {
    res.send({
      user: 'test',
    })
    res.status(200)
    return true
} )

module.exports = router