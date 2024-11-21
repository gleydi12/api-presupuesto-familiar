import db from '../../config.js';

import { respuesta } from '../presupuestos/presupuestosQuery.js';

/**
 * Carga la lista de Usuarios 
 */
const getUsuariosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Usuarios', (err, filas) => {       
            respuesta (err, filas, resolve, reject);
        });
    });
};


const getUsuarioQuery = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Usuarios WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Guardar una nuevo Usuario
 */
const createUsuarioQuery = async (Usuarios) => {
    const { nombre, apellido, rol } = Usuarios;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Usuarios (nombre, apellido, rol ) VALUES (?, ?, ?)';
        db.query(sql, [nombre, apellido, rol ], (err, resultado) => {
                     
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Actualizar Usuario por su ID
 */
const updateUsuarioQuery = (id, Usuarios) => {
    const {nombre, apellido, rol } = Usuarios;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Usuarios SET nombre=?, apellido=?, rol =?, WHERE id = ?';
        db.query(sql, [nombre, apellido, rol [id]], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Eliminar un Usuario por su ID
 */
const deleteUsuarioQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Usuario WHERE id = ?';
        db.query(sql, [id], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    getUsuariosQuery,
    getUsuarioQuery,
    createUsuarioQuery,
    updateUsuarioQuery,
    deleteUsuarioQuery,   
}