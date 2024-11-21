import { Router } from 'express';

import {
    getUsuarios,
    getUsuario,
    createUsuario,
    updateUsuario,
    deleteUsuario
} from '../../controllers/usuarios/usuariosController.js';


const UsuarioRouter = Router();

UsuarioRouter.get('/', getUsuarios);
UsuarioRouter.get('/:id', getUsuario);
UsuarioRouter.post('/', createUsuario);
UsuarioRouter.put('/:id', updateUsuario);
UsuarioRouter.delete('/:id', deleteUsuario);

export default UsuarioRouter;