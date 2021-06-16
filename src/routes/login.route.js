const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario.model');

const app = express();

app.post('/login', async(req, res) => {
    const body = req.body;
    try {
        const usuarioLogin = await Usuario.findOne({ where: { email: body.email } });
        if (!usuarioLogin) {
            return res.status(400).json({
                ok: false,
                err: { message: 'Usuario o contraseña incorrectos' }
            });
        }
        if (!bcrypt.compareSync(body.password, usuarioLogin.pass)) {
            return res.status(400).json({
                ok: false,
                err: { message: 'Usuario o contraseña incorrectos' }
            });
        }
        const token = jwt.sign({
            usuario: usuarioLogin
        }, process.env.SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
        return res.json({
            ok: true,
            usuario: usuarioLogin,
            token
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
});

module.exports = app;