// Cargar el módulo de mysql
import { createPool } from "mysql2";

// Cargo el archivo .env
import dotenv from "dotenv";
dotenv.config();

// Crear la conexión a la base de datos
const db = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    keepAliveInitialDelay: 300000,
    enableKeepAlive: true
});

// Verificar la conexión
db.getConnection((err, connection) => {
    if (err) {
        console.error('ERROR: ', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('La conexión a la base de datos fue cerrada.');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('La base de datos tiene muchas conexiones.');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('La conexión a la base de datos fue rechazada.');
        }
    }
    if (connection) {
        connection.release();
    }
    return;
})


export default db;