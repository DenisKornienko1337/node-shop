const Sequelize = require('sequelize')
const sequelize = new Sequelize('shop', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize