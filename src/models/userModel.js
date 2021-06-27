const sequelize = require('sequelize');
const connection  = require('./connectionModel');

const userDatabaseCreator = connection.define('user', {
    User: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull : true,
            notEmpty: true
        }
    },

    Password: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull : true,
            notEmpty: true
        }
    },

    Email: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull : true,
            notEmpty: true
        }
    },

})

userDatabaseCreator.sync({
    force: false
});

module.exports = userDatabaseCreator;