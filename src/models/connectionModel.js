const sequelize = require('sequelize');

const connection = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/../database/database.sqlite'
});

module.exports = connection;