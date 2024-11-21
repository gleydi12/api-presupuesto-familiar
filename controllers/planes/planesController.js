import {
    getPlanesQuery,
    getPlanQuery,
    createPlanQuery,
    updatePlanQuery,
    deletePlanQuery,   

 } from '../../db/planes/planesQuery.js'

const getPlanes = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const Planes = await getPlanesQuery();
    res.json(Planes);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getPlan = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Plan = await getPlanQuery(req.params.id);
      res.json(Plan);
    } catch (error) {
      res.status(500).send(error);
    }
  };

  /**
   * Crear un Plane
   */
  const createPlan = async (req, res) => {
    console.log(req.body)
    try {
        const Plan = req.body;
        const resultado = await createPlanQuery(Plan);
        res.json({ mensaje: 'Planes creados con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Plane
   */
  const updatePlan = async (req, res) => {
    try {
        const id = req.params.id;
        const Plan = req.body;
        const resultado = await updatePlanQuery(id, Plan);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Plan actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Plan no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar Plane
   */
  const deletePlan= async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await deletePlanQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Plan eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Plan no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Plan', error: error.message });
    }
  };

  export {
    getPlanes,
    getPlan,
    createPlan,
    updatePlan,
    deletePlan,   

 }


