const express = require('express')
const router  = express.Router()

const {CategoriesController} = require('../controllers/index')

router.get('/', CategoriesController.index)

router.post('/create', CategoriesController.create)

// router.get('/get-category-products', CategoriesController.getCategoryProducts)

router.post('/delete', CategoriesController.delete)

module.exports = router