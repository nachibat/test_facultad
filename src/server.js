require('./config/general');

const db = require('./config/database');

const express = require('express');
const cors = require('cors');

const app = express();

// Configuracion de BodyParser (con la version de Express 4.0 ya viene incorporado el body-parser, no hace falta instalarlo)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configuración de cabeceras y CORS
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTION');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept');
    next();
});

// Conexion a la base de datos
db.authenticate()
    .then(() => console.log('Connected to MSSQL server!'))
    .catch(err => console.log('Fail to connect: ', err));

// Configuracion de rutas
app.use(require('./routes/index.route'));

// Inicio del servidor

if (process.env.NODE_ENV === 'dev') {
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}...`);
    });
} else {
    console.log('Configurar el servidor https');
}