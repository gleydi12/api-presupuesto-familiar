import {
    getPresupuestosQuery,
    getPresupuestoQuery,
    createPresupuestoQuery,
    updatePresupuestoQuery,
    deletePresupuestoQuery,   

 } from '../../db/presupuestos/presupuestosQuery.js'

const getPresupuestos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const presupuestos = await getPresupuestosQuery();
    res.json(presupuestos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPresupuesto = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const presupuestos = await getPresupuestoQuery(req.params.id);
      res.json(presupuestos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un calificaciones
   */
  const createPresupuesto = async (req, res) => {
    console.log(req.body)
    try {
        const presupuesto = req.body;
        const resultado = await createPresupuestoQuery(presupuesto);
        res.json({ mensaje: 'presupuesto creados con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de una calificacion
   */
  const updatePresupuesto = async (req, res) => {
    try {
        const id = req.params.id;
        const presupuesto = req.body;
        const resultado = await updatePresupuestoQuery(id, presupuesto);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'presupuesto actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'presupuesto no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar  calificaciones
   */
  const deletePresupuesto= async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await deletePresupuestoQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'presupuesto eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'presupuesto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el presupuesto', error: error.message });
    }
  };

  export {
    getPresupuestos,
    getPresupuesto,
    createPresupuesto,
    updatePresupuesto,
    deletePresupuesto,   

 }