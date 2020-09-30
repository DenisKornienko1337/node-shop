const express = require('express')
const router  = express.Router()

const {
  CategoriesController, CartController
} = require('../controllers/index')
let isAuth = require('../middleware/auth')


router.post('/delete-all', CartController.deleteAll)

module.exports = router