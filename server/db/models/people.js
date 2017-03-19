let db = require('./_db.js');
let Sequelize = require('sequelize');

module.exports = db.define('people', {
    name: {
        type: Sequelize.STRING
    },
    favoriteCity: {
        type: Sequelize.STRING
    }
})

console.log('Loading people model');