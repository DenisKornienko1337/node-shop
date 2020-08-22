const express = require('express')
const app = express()
const passport  = require('passport')
const router  = express.Router()
const authController = require('../controllers/auth.js')

router.get('/check', authController.check)

router.post('/add-user', authController.addUser)

router.post('/login', authController.logIn)
module.exports = router
