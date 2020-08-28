const User = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10
const passport = require('passport')
const nodemailer = require('nodemailer')
const axios = require('axios')
const sendmail = require('sendmail')()
const Cart = require('../models/Cart')

async function addUser(username, password) {
    if(!username || !password) return false
    let user = await User.findOne({where: {username: username}})
    console.log('user', user)
    if(user) return false
    const hash = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function(err, hash) {
          if (err) reject(err)
          resolve(hash)
        });
      })
    let newCart = await Cart.create({})
    let newUser = await User.create({
        username: username,
        password: hash,
        cartId: newCart.dataValues.id
    })
    let updateCart = await Cart.findOne({where: {id: newCart.dataValues.id}})
    updateCart.customerId = newUser.dataValues.id
    updateCart.save()
    return true
}

exports.check = (req, res) => {
    res.send(true)
}

exports.logIn = (req, res, next) => {
    passport.authenticate('local', function (error, user, info) {
        console.log(error)
        console.log(user)
        console.log(info)
        if (error) {
          res.status(401).send(error);
          return 
        } else if (!user) {
          res.status(401).send(info);
          return
        } else {
          //next();
        }
        req.login(user, function(err){
            console.log(user)
            req.session.user = user
            console.log('req.session.user', req.session.user)
        })
        res.status(200).send(info);
      })(req, res);
}

exports.addUser = async (req, res) => {
    let isAdded= await addUser(req.body.username, req.body.password)
    if(!isAdded) res.status(500).send(false)
    else res.status(200).send(true)
}

exports.logOut = (req, res) => {
    req.logout()
    return res.sendStatus(200)
}

exports.sendTempPass = async (req, res) => {
    let isAdded = await addUser(req.query.email, req.query.password)
    console.log('isadded from sendmail', isAdded)
    console.log('Req query email', req.query.email)
    if(!isAdded) res.status(500).send(false)
    if(isAdded) {
        let mailOpts = {
            from: 'd.kornienko1337@gmail.com',
            to: req.query.email,
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
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        User.update({password: hash}, {where: {username: req.user.username}})
        .catch(err => {
            console.log('Err update', err)
            return res.sendStatus(500)
        })
        req.logout()
        return res.sendStatus(200)
    });
}