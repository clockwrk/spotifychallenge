var Sequelize = require('sequelize');
var path = require('path');
var env = require(path.join(__dirname, '../../env'));

console.log("This database is connected to", env.DATABASE_URL)

var db = new Sequelize(env.DATABASE_URL, {
    logging: false
});
module.exports = db;