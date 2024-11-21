import db from '../../config.js';

import { respuesta } from '../presupuestos/presupuestosQuery.js';

/**
 * Carga la lista Planes 
 */
const getPlanesQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Planes', (err, filas) => {       
            respuesta (err, filas, resolve, reject);
        });
    });
};


const getPlanQuery = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM Planes WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Guardar una nuevo Plane
 */
const createPlanQuery = async (Planes) => {
    const { monto, objetivo, fecha_limite } = Planes;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Planes ( monto, objetivo, fecha_limite ) VALUES (?, ?, ?)';
        db.query(sql, [ monto, objetivo, fecha_limite], (err, resultado) => {
                     
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Actualizar Plan por su ID
 */
const updatePlanQuery = (id, Planes) => {
    const { monto, objetivo, fecha_limite} = Planes;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE Planes SET  monto=?, objetivo=?, fecha_limite=?, WHERE id = ?';
        db.query(sql, [ monto, objetivo, fecha_limite [id]], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Eliminar un Plan por su ID
 */
const deletePlanQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM Planes WHERE id = ?';
        db.query(sql, [id], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    getPlanesQuery,
    getPlanQuery,
    createPlanQuery,
    updatePlanQuery,
    deletePlanQuery,   
}