const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Book = db.define('Book', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true } // Validasi [cite: 83]
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true } // Validasi [cite: 83]
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, { freezeTableName: true });

module.exports = Book;