const sequelize = require('sequelize');
const connection = require('./connectionModel');

const listDatabaseCreator = connection.define('list', {

    ListDate: {
        type: sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: true,
            notEmpty: true
        }
    }
});

listDatabaseCreator.sync({
    force: false
});

module.exports = listDatabaseCreator;