const User = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10
const passport = require('passport')
const nodemailer = require('nodemailer')
const axios = require('axios')
const sendmail = require('sendmail')()

exports.mail = (req, res) => {
    sendmail({
        from: 'd.kornienko1337@gmail.com',
        to: 'd.kornienko1337@gmail.com',
        subject: 'test sendmail',
        html: 'Mail of test sendmail ',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    })
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
    if(!req.body.username || !req.body.password) res.sendStatus(500)
    console.log(req.body.username)
    let user = await User.findOne({where: {username: req.body.username}})
    if(user){
        console.log('Error!')
        res.sendStatus(500)
        return
    }
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        User.create({
            username: req.body.username,
            password: hash,
        })
        .then(r => {
            console.log('User added!')
            res.sendStatus(200)
        })
        .catch(err => console.log(err))
    });
}

exports.logOut = (req, res) => {
    req.logout()
    return res.sendStatus(200)
}

exports.sendTempPass = (req, res) => {
    let fullUrl = req.get('host') + req.originalUrl
    let arrUserUrl = fullUrl.split('/')
    delete arrUserUrl[arrUserUrl.length-1]
    addUserUrl = 'http://'+arrUserUrl.join('/')+'add-user'
    axios.post(addUserUrl, {
        username: req.query.email,
        password: req.query.password,
    })
    sendmail({
        from: 'd.kornienko1337@gmail.com',
        to: req.query.email,
        subject: 'Temp pass for Nuxt Shop',
        html: 'Mail of test sendmail ',
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    })
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