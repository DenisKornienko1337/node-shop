const User = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10
const passport = require('passport')
const nodemailer = require('nodemailer')
const axios = require('axios')

exports.check = (req, res) => {
    res.send({'hello': 'world'})
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
    res.redirect('http://localhost:8081/auth/check')
}

exports.sendTempPass = (req, res) => {
    let transport = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
           user: 'b9a70d9884e11b',
           pass: '63ba4f09ca3d22'
        }
    });
    let fullUrl = req.get('host') + req.originalUrl
    let arrUserUrl = fullUrl.split('/')
    delete arrUserUrl[arrUserUrl.length-1]
    addUserUrl = 'http://'+arrUserUrl.join('/')+'add-user'

    axios.post(addUserUrl, {
        username: req.query.email,
        password: req.query.password,
    })
    const message = {
        from: '331872a603-9383b4@inbox.mailtrap.io',
        to: req.query.password,
        subject: 'Registration on Nuxt Shop',
        text: `Get your temporary password! ${pass}`
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
          res.send(true)
          res.sendStatus(500)
        } else {
          console.log(info);
          res.send(true)
          res.sendStatus(200)
        }
    });
}

exports.changePassword = (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        User.findOne({where: {username: req.user.username}})
        .then()
    });
}

function generatePassword(length) {
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let retVal = ""
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
