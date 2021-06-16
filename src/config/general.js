// Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Puertos
process.env.PORT = process.env.PORT || 22083;
process.env.SECURE_PORT = process.env.SECURE_PORT || 22084;

// Servidor de base de datos
process.env.DB_URI = process.env.DB_URI || 'localhost';
process.env.DB_NAME = process.env.DB_NAME || 'test';
process.env.DB_USER = process.env.DB_USER || 'test';
process.env.DB_PASS = process.env.DB_PASS || 'test';

// Configuraciones JasonWebToken
process.env.CADUCIDAD_TOKEN = '7 days';
process.env.SEED = process.env.SEED || 'seed-de-desarrollo';