const express = require('express');
const Usuario = require('../models/usuario.model');
const bcrypt = require('bcrypt');
const { verificaToken } = require('../middlewares/authentication');

const app = express();

// Testeo principal
app.get('/test', (req, res) => {
    Usuario.findAll()
        .then(users => {
            return res.json({
                ok: true,
                users
            });
        })
        .catch(err => {
            return res.status(500).json({
                ok: false,
                err
            });
        });
});

// Consulta de usuario por token
app.get('/usuario', verificaToken, (req, res) => {
    return res.json({
        ok: true,
        usuario: req.usuario
    });
});

// Alta de usuario
app.post('/usuario', async(req, res) => {
    const body = req.body;
    const usuario = new Usuario({
        email: body.email,
        pass: bcrypt.hashSync(body.pass, 10),
        apellido: body.apellido,
        nombre: body.nombre,
        nro_doc: body.nro_doc,
        estado: body.estado,
        carrera: body.carrera,
        anio: body.anio,
        entrega: body.entrega,
        activo: body.activo,
        avatar: body.avatar,
    });
    try {
        await usuario.save({ fields: ['email', 'pass', 'apellido', 'nombre', 'nro_doc', 'estado', 'carrera', 'anio', 'entrega', 'activo', 'avatar'] });
        return res.json({
            ok: true,
            usuario
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
});

module.exports = app;