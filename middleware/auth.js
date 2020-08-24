module.exports = (req, res, next) => {
    console.log('req.user:', req.user)
    if(!req.user){
        res.send(false)
        res.sendStatus(401)
        return
    }
    res.send(true)
    next()
}