const config = require('../config/config')

module.exports = (req, res, next) => {
    let email = req.body.email || req.body.username
    if(!email || !req.body.password) return res.status(500).send(false)
    if(!config.emailRegex.test(email) || config.passwordRegex.test(req.body.password)) return res.status(500).send(false)
    next()
}