import {
    getUsuariosQuery,
    getUsuarioQuery,
    createUsuarioQuery,
    updateUsuarioQuery,
    deleteUsuarioQuery,   

 } from '../../db/usuarios/usuariosQuery.js'

const getUsuarios = async (req, res) => {
    // Un bloque try-catch  sirve para validar si la peticion se obtiene o se devuelve un error
  // Try -> intentar
  // Catch -> capturar el error
  try {
    //  Ejecutar la consulta en la base de datos
    const Usuarios = await getUsuariosQuery();
    res.json(Usuarios);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUsuario = async (req, res) => { 
    try {
      //  Ejecutar la consulta en la base de datos
      const Usuarios = await getUsuarioQuery(req.params.id);
      res.json(Usuarios);
    } catch (error) {
      res.status(500).send(error);
    }
  };
  
  /**
   * Crear un Usuario
   */
  const createUsuario = async (req, res) => {
    console.log(req.body)
    try {
        const Usuario = req.body;
        const resultado = await createUsuarioQuery(Usuario);
        res.json({ mensaje: 'Usuarios creados con éxito', id: resultado.insertId });
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Actualizar los datos de un Usuario
   */
  const updateUsuario = async (req, res) => {
    try {
        const id = req.params.id;
        const Usuario = req.body;
        const resultado = await updateUsuarioQuery(id, Usuario);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Usuario actualizado con éxito', id: id });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).send(error);
    }
  };
  
  /**
   * Eliminar Usuario
   */
  const deleteUsuario= async (req, res) => {
    try {
        const id = req.params.id;
        const resultado = await deleteUsuarioQuery(id);
        if (resultado.affectedRows > 0) {
            res.json({ mensaje: 'Usuario eliminado con éxito' });
        } else {
            res.status(404).json({ mensaje: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar el Usuario', error: error.message });
    }
  };

  export {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario,   

 }


