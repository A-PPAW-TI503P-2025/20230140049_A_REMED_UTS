const { DataTypes, Sequelize } = require('sequelize');
const db = require('../config/database');

const BorrowLog = db.define('BorrowLog', {
    userId: { type: DataTypes.INTEGER, allowNull: false },
    bookId: { type: DataTypes.INTEGER, allowNull: false },
    borrowDate: { type: DataTypes.DATE, defaultValue: Sequelize.NOW },
    latitude: { type: DataTypes.FLOAT, allowNull: false }, // [cite: 77]
    longitude: { type: DataTypes.FLOAT, allowNull: false } // [cite: 77]
}, { freezeTableName: true });

module.exports = BorrowLog;