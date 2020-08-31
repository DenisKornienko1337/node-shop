const config = require('../config/config').config

module.exports = (req, res, next) => {
    if(!req.body.username || !req.body.password) return res.status(500).send(false)
    if(!config.emailRegex.test(req.body.username) || !config.passwordRegex.test(req.body.password)) {
        return res.status(500).send(false)
    }
    next()
}