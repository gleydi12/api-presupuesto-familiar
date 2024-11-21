import db from '../../config.js';

import { respuesta } from '../presupuestos/presupuestosQuery.js';

/**
 * Carga la lista ingresos 
 */
const getIngresosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Ingresos', (err, filas) => {       
            respuesta (err, filas, resolve, reject);
        });
    });
};


const getIngresoQuery = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Ingresos WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Guardar una nueva calificacio
 */
const createIngresoQuery = async (Ingresos) => {
    const { fecha, monto, origen, id_usuario } = Ingresos;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Ingresos (fecha, monto, origen, id_usuario) VALUES (?, ?, ?,?)';
        db.query(sql, [fecha, monto, origen, id_usuario], (err, resultado) => {
                     
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Actualizar Ingreso por su ID
 */
const updateIngresoQuery = (id, Ingresos) => {
    const { fecha, monto, origen, id_usuario} = Ingresos;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Ingresos SET fecha=?, monto=?, origen=?, id_usuario= ?, WHERE id = ?';
        db.query(sql, [fecha, monto, origen, id_usuario [id]], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Eliminar una calificacion por su ID
 */
const deleteIngresoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Ingreso WHERE id = ?';
        db.query(sql, [id], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    getIngresosQuery,
    getIngresoQuery,
    createIngresoQuery,
    updateIngresoQuery,
    deleteIngresoQuery,   
}