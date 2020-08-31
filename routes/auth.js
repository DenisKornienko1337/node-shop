const express = require('express')
const passport  = require('passport')
const router  = express.Router()
const authController = require('../controllers/auth.js')
let isAuth = require('../middleware/auth')
let isSecureCreds = require('../middleware/is-secure-creds')
let isUserExists = require('../middleware/is-user-exists')

const UserController = require('../controllers/UserController')
const MailController = require('../controllers/MailController')

router.post('/add-user', isUserExists, isSecureCreds, async (req, res) => {
  let isAdded = await UserController.add(
      req.body.username,
      req.body.password,
      req.body.type,
      req.body.merchantName
  )
  if(!isAdded) res.status(500).send(false)
  else res.status(200).send(true)
})

router.post('/login', (req, res) => {
  UserController.login()
})

router.post('/change-pass', isAuth, isSecureCreds, (req, res) => {
  if(UserController.changePassword()){
    req.logout()
    return res.status(200).send(true)
  } else {
    return res.status(500).send(false)
  }
})

router.post('/send-temp-pass', (req, res) => {
  MailController.send()
})

router.post('/logout', isAuth, (req, res) => {
  req.logout()
  return res.sendStatus(200)
})


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
