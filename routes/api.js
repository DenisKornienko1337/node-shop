const express = require('express')
const router  = express.Router()

const {
  CategoriesController, CartController
} = require('../controllers/index')
let isAuth = require('../middleware/auth')

router.get('/get-all-categories', CategoriesController.getAllCategories)

router.post('/delete-all-from-cart', CartController.deleteAllFromCart)

module.exports = router