module.exports = (req, res, next) => {
    console.log('req.user:', req.user)
    if(!req.user){
        res.sendStatus(401)
        return
    }
    next()
}