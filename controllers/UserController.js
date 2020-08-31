const User = require('../models/User')
const Cart = require('../models/Cart')
const bcrypt = require('bcrypt')
const saltRounds = 10
const passport = require('passport')
const config = require('../config/config').config
const sendmail = require('sendmail')()

module.exports = class UserController {
    // constructor(username){
    //     this.username = username
    // }
    static async add(username, type, password, merchantName){
        try {
            let hash = await this.makeHash(password)
            let newCart = await Cart.create({})
            let newUser = await User.create({
                username: username,
                password: hash,
                cartId: newCart.dataValues.id,
                type: type,
            })
            if(merchantName) newUser.merchantName = merchantName
            let updateCart = await Cart.findOne({where: {id: newCart.dataValues.id}})
            updateCart.customerId = newUser.dataValues.id
            updateCart.save()
            return true
        } catch(err){
            console.log('Error user adding:', err)
            return true
        }
    }
    static async makeHash(password){
        this.hash = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function(err, hash) {
              if (err) reject(err)
              resolve(hash)
            });
          })
    }
    static login(){
        passport.authenticate('local', function (error, user, info) {
            if (error) {
              res.status(401).send(error);
              return 
            } else if (!user) {
              res.status(401).send(info);
              return
            }
            req.login(user, function(err){
                req.session.user = user
                console.log('req.session.user', req.session.user)
            })
            res.status(200).send(info);
          })(req, res);
    }
    static async changePassword(username, newPassword) {
        try {
            let hash = this.makeHash(username)
            await User.update({password: hash}, {where: {username: username}})
            return true
        }
        catch(err){
            console.log('Error changing password', err)
            return false
        }
    }
}