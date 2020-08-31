const express = require('express')
const passport  = require('passport')
const router  = express.Router()
const authController = require('../controllers/auth.js')
let isAuth = require('../middleware/auth')
let isSecureCreds = require('../middleware/is-secure-creds')
let isUserExists = require('../middleware/is-user-exists')
const config = require('../config/config_base').config

router.post('/add-user', isUserExists, isSecureCreds, authController.addUser)

router.post('/login', authController.logIn)

router.post('/change-pass', isAuth, isSecureCreds, authController.changePassword)

router.post('/send-temp-pass', authController.sendTempPass)

router.post('/logout', isAuth, authController.logOut)


router.get('/check', isAuth, authController.check)

router.get('/user', (req, res) => {
  res.send({
    user: 'test',
  })
  res.status(200)
  return true
} )

router.get('/google', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('Success!!!')
    res.redirect('/');
  });

module.exports = router
