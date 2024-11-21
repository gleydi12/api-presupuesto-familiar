import {
    getGastosQuery,
    getGastoQuery,
    createGastoQuery,
    updateGastoQuery,
    deleteGastoQuery,   

 } from '../../db/gastos/gastosQuery.js'

const getGastos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const Gastos = await getGastosQuery();
    res.json(Gastos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getGasto = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Gastos = await getGastoQuery(req.params.id);
      res.json(Gastos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un gasto
   */
  const createGasto = async (req, res) => {
    console.log(req.body)
    try {
        const Gasto = req.body;
        const resultado = await createGastoQuery(Gasto);
        res.json({ mensaje: 'Gastos creados con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Gasto
   */
  const updateGasto = async (req, res) => {
    try {
        const id = req.params.id;
        const Gasto = req.body;
        const resultado = await updateGastoQuery(id, Gasto);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Gasto actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Gasto no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar Gasto
   */
  const deleteGasto= async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await deleteGastoQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Gasto eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Gasto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Gasto', error: error.message });
    }
  };

  export {
    getGastos,
    getGasto,
    createGasto,
    updateGasto,
    deleteGasto,   

 }


