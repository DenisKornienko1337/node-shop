const express = require('express')
const app = express()
const passport  = require('passport')
const router  = express.Router()
const authController = require('../controllers/auth.js')
router.get('/check', authController.check)

module.exports = router
