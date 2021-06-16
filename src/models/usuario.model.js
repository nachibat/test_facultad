const { DataTypes } = require('sequelize');
const db = require('../config/database');

const Usuario = db.define('Cedula', {
    legajo: {
        type: DataTypes.SMALLINT,
        primaryKey: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pass: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nro_doc: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    carrera: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anio: {
        type: DataTypes.STRING(4),
        allowNull: false
    },
    entrega: DataTypes.BOOLEAN,
    activo: DataTypes.BOOLEAN,
    avatar: DataTypes.STRING(10)
});

module.exports = Usuario;