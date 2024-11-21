import db from '../../config.js';

export const respuesta = (err, result, resolve, reject) => {
    if (err) {
        console.log(err);
        reject(err);
    } else {
        resolve(result);
    }
};

/**
 * Carga la lista calificaciones (en este ejemplo solo 3 calificacioness)
 */
const getPresupuestosQuery = () => {
    // Una promesa es una forma de que siempre se devuelva un resultado al quien llama (sea error o éxito)
    // Si la consulta no genera error, entonces resuelve/cumple la promesa con el resultado
    // Si hay algun error entonces rechaza la consulta e informa la razón 
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM presupuestos', (err, filas) => {       
            respuesta (err, filas, resolve, reject);
        });
    });
};


const getPresupuestoQuery = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM presupuestos WHERE id = ? LIMIT 1', [id], (err, filas) => {
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Guardar una nueva calificacio
 */
const createPresupuestoQuery = async (presupuestos) => {
    const { fecha_inicio, fecha_fin, limite } = presupuestos;
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO presupuestos (fecha_inicio, fecha_fin, limite) VALUES (?, ?, ?)';
        db.query(sql, [fecha_inicio, fecha_fin, limite], (err, resultado) => {
                     
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Actualizar presupuesto por su ID
 */
const updatePresupuestoQuery = (id, presupuestos) => {
    const { fecha_inicio, fecha_fin, limite} = presupuestos;
    return new Promise((resolve, reject) => {
        const sql = 'UPDATE presupuestos SET fecha_inicio=?, fecha_fin=?, limite= ?, WHERE id = ?';
        db.query(sql, [fecha_inicio, fecha_fin, limite [id]], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

/**
 * Eliminar una calificacion por su ID
 */
const deletePresupuestoQuery = (id) => {
    return new Promise((resolve, reject) => {
        const sql = 'DELETE FROM presupuesto WHERE id = ?';
        db.query(sql, [id], (err, resultado) => {
           
            respuesta (err, filas, resolve, reject);

        });
    });
};

// Exportar todas las funciones definidas en este archivo
export {
    getPresupuestosQuery,
    getPresupuestoQuery,
    createPresupuestoQuery,
    updatePresupuestoQuery,
    deletePresupuestoQuery,   
}