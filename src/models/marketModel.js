const sequelize = require('sequelize');
const connection = require('./connectionModel');

const marketDatabaseCreator = connection.define('market', {
    Name: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true,
        }
    },

    Adress: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty : true
        }
    }
});

marketDatabaseCreator.sync({
    force: false
});

module.exports = marketDatabaseCreator;