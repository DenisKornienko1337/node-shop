const User = require('../models/User')

module.exports = async(req, res, next) => {
    let user = await User.findOne({where: {username: req.body.username}})
    if(user) return res.status(500).send(false)
    next()
}