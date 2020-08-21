const User = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 10

exports.check = (req, res) => {
    res.send({'hello': 'world'})
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

// exports.find = (req, res) => {
//     User.findAll({
//         where: 
//     })
// }