const { db, DataTypes } = require('../utils/database.utils');

//modelo  de tabla

const Registration = db.define('registration', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    exitTime: {
        type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'working',
    },
});

module.exports = { Registration };
