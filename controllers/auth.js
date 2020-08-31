const User = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10
const passport = require('passport')
const nodemailer = require('nodemailer')
const axios = require('axios')
const sendmail = require('sendmail')()
const Cart = require('../models/Cart')

const UserController = require('../controllers/UserController')
const MailController = require('../controllers/MailController')

exports.check = (req, res) => {
    res.send(true)
}

exports.logIn = (req, res, next) => {
    passport.authenticate('local', function (error, user, info) {
        if (error) {
          res.status(401).send(error);
          return 
        } else if (!user) {
          res.status(401).send(info);
          return
        } else {
            // next()
        }
        req.login(user, function(err){
            req.session.user = user
            console.log('req.session.user', req.session.user)
        })
        res.status(200).send(info);
      })(req, res);
}

exports.addUser = async (req, res) => {
    let isAdded = await UserController.add(
        req.body.username,
        req.body.password,
        req.body.type,
        req.body.merchantName
    )
    if(!isAdded) res.status(500).send(false)
    else res.status(200).send(true)
}

exports.logOut = (req, res) => {
    req.logout()
    return res.sendStatus(200)
}

exports.sendTempPass = async (req, res) => {
    let isAdded = await addUser(req.query.username, req.query.password, req.query.type)
    if(!isAdded) res.status(500).send(false)
    if(isAdded) {
        let mailOpts = {
            from: 'd.kornienko1337@gmail.com',
            to: req.query.username,
            subject: 'Temp pass for Nuxt Shop',
            html: 'Your temp pass is:'+req.query.password,
          }
        sendmail(mailOpts, function(err) {
              if(err){
                  console.log('Error from mail!', err)
                  return res.status(500).send(false)
              }
        })
    }
    res.status(200).send(true)
}

exports.changePassword = (req, res) => {
    MailController.send({
        from: config.email,
        to: req.body.username,
        subject: 'Temp pass for Nuxt Shop',
        html: 'Your temp pass is:'+req.body.password,
      })
}