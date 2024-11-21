import {
    getDepositosQuery,
    getDepositoQuery,
    createDepositoQuery,
    updateDepositoQuery,
    deleteDepositoQuery,   

 } from '../../db/depositos/depositosQuery.js'

const getDepositos = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const Depositos = await getDepositosQuery();
    res.json(Depositos);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDeposito = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Depositos = await getDepositoQuery(req.params.id);
      res.json(Depositos);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Deposito
   */
  const createDeposito = async (req, res) => {
    console.log(req.body)
    try {
        const Deposito = req.body;
        const resultado = await createDepositoQuery(Deposito);
        res.json({ mensaje: 'Depositos creados con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Deposito
   */
  const updateDeposito = async (req, res) => {
    try {
        const id = req.params.id;
        const Deposito = req.body;
        const resultado = await updateDepositoQuery(id, Deposito);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Deposito actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Deposito no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar Deposito
   */
  const deleteDeposito= async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await deleteDepositoQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Deposito eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Deposito no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Deposito', error: error.message });
    }
  };

  export {
    getDepositos,
    getDeposito,
    createDeposito,
    updateDeposito,
    deleteDeposito,   

 }


