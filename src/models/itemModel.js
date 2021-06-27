const sequelize = require('sequelize');
const connection = require('./connectionModel');

const itemDatabaseCreator = connection.define('item', {
    Name: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Valor: {
        type: sequelize.FLOAT,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    },

    Market: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    }
})

itemDatabaseCreator.sync({
    force: false
});

module.exports = itemDatabaseCreator;