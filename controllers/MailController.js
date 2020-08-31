const config = require('../config/config').config
const sendmail = require('sendmail')()

module.exports = class MailController {
    static send(msg){
        sendmail(msg, function(err) {
            if(err){
                console.log('Error from mail!', err)
                return false
            }
        })
        return true
    }
}