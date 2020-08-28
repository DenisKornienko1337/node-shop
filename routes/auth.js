const express = require('express')
const passport  = require('passport')
const router  = express.Router()
const authController = require('../controllers/auth.js')
let isAuth = require('../middleware/auth')
const isSecureCreds = require('../middleware/is-secure-creds')

router.get('/check', isAuth, authController.check)

router.post('/add-user', isSecureCreds, authController.addUser)

router.post('/login', authController.logIn)

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

router.get('/send-temp-pass', authController.sendTempPass)
router.get('/logout', isAuth, authController.logOut)

router.post('/change-pass', isAuth, isSecureCreds, authController.changePassword)

  module.exports = router
