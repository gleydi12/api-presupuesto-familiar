import db from '../../config.js';

import { respuesta } from '../presupuestos/presupuestosQuery.js';
/**
 * Carga la lista Depositos 
 */
const getDepositosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Depositos', (err, filas) => {       
            respuesta (err, filas, resolve, reject);
        });
    });
};


const getDepositoQuery = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Depositos WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Guardar una nuevo Deposito
 */
const createDepositoQuery = async (Depositos) => {
    const { id_usuario, id_plan, monto, fecha } = Depositos;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Depositos (id_usuario, id_plan, monto, fecha ) VALUES (?, ?, ?,?)';
        db.query(sql, [id_usuario, id_plan, monto, fecha], (err, resultado) => {
                     
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Actualizar Deposito por su ID
 */
const updateDepositoQuery = (id, Depositos) => {
    const {id_usuario, id_plan, monto, fecha} = Depositos;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Depositos SET id_usuario=?, id_plan=?, monto=?, fecha=?, WHERE id = ?';
        db.query(sql, [id_usuario, id_plan, monto, fecha [id]], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Eliminar un Deposito por su ID
 */
const deleteDepositoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Deposito WHERE id = ?';
        db.query(sql, [id], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    getDepositosQuery,
    getDepositoQuery,
    createDepositoQuery,
    updateDepositoQuery,
    deleteDepositoQuery,   
}