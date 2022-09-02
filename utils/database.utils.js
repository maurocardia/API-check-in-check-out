const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'myd270512',
    port: 5432,
    database: 'check-in - check-out',
    logging: false,
});

module.exports = { db, DataTypes };
