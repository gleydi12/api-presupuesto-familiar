import {
    getIngresosQuery,
    getIngresoQuery,
    createIngresoQuery,
    updateIngresoQuery,
    deleteIngresoQuery,   

 } from '../../db/ingresos/ingresosQuery.js'

const getIngresos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const Ingresos = await getIngresosQuery();
    res.json(Ingresos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getIngreso = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Ingresos = await getIngresoQuery(req.params.id);
      res.json(Ingresos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un calificaciones
   */
  const createIngreso = async (req, res) => {
    console.log(req.body)
    try {
        const Ingreso = req.body;
        const resultado = await createIngresoQuery(Ingreso);
        res.json({ mensaje: 'Ingresos creados con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un ingreso
   */
  const updateIngreso = async (req, res) => {
    try {
        const id = req.params.id;
        const Ingreso = req.body;
        const resultado = await updateIngresoQuery(id, Ingreso);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Ingreso actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Ingreso no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar ingreso
   */
  const deleteIngreso= async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await deleteIngresoQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Ingreso eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Ingreso no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Ingreso', error: error.message });
    }
  };

  export {
    getIngresos,
    getIngreso,
    createIngreso,
    updateIngreso,
    deleteIngreso,   

 }