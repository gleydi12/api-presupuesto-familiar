import db from '../../config.js';

import { respuesta } from '../presupuestos/presupuestosQuery.js';

/**
 * Carga la lista Gastos 
 */
const getGastosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Gastos', (err, filas) => {       
            respuesta (err, filas, resolve, reject);
        });
    });
};


const getGastoQuery = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Gastos WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Guardar una nuevo gasto
 */
const createGastoQuery = async (Gastos) => {
    const { id_usuario, id_presupuesto, monto, estado, fecha } = Gastos;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Gastos (id_usuario, id_presupuesto, monto, estado, fecha ) VALUES (?, ?, ?,?, ?)';
        db.query(sql, [id_usuario, id_presupuesto, monto, estado, fecha], (err, resultado) => {
                     
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Actualizar Gasto por su ID
 */
const updateGastoQuery = (id, Gastos) => {
    const {id_usuario, id_presupuesto, monto, estado, fecha} = Gastos;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Gastos SET id_usuario=?, id_presupuesto=?, monto=?, estado=?, fecha=?, WHERE id = ?';
        db.query(sql, [id_usuario, id_presupuesto, monto, estado, fecha [id]], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Eliminar un gasto por su ID
 */
const deleteGastoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Gasto WHERE id = ?';
        db.query(sql, [id], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    getGastosQuery,
    getGastoQuery,
    createGastoQuery,
    updateGastoQuery,
    deleteGastoQuery,   
}