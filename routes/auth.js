const express = require('express')
const router  = express.Router()
const passport  = require('passport')

const {AuthController} = require('../controllers/index')
let isAuth = require('../middleware/auth')
let isSecureCreds = require('../middleware/is-secure-creds')
let isUserExists = require('../middleware/is-user-exists')
const config = require('../config/config_base').config

router.post('/add-user', isUserExists, isSecureCreds, AuthController.addUser)

router.post('/login', AuthController.logIn)

router.post('/change-pass', isAuth, isSecureCreds, AuthController.changePassword)

router.post('/send-temp-pass', AuthController.sendTempPass)

router.post('/logout', isAuth, AuthController.logOut)

router.get('/check', isAuth, AuthController.check)

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
