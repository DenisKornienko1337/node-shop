const express = require('express')
const router  = express.Router()

const {CategoriesController} = require('../controllers/index')

router.post('/add-category', CategoriesController.add)

// router.get('/get-category-products', CategoriesController.getCategoryProducts)

router.post('/delete-category', CategoriesController.delete)

module.exports = router