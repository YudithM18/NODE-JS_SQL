const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('hotel', 'paula', '0102030405', {
    host: '127.0.0.1',
    dialect: 'mysql',
});



module.exports = sequelize;