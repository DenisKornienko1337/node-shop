const config = require('../../config/config_base').config
const sendmail = require('sendmail')()

module.exports = class MailClass {
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