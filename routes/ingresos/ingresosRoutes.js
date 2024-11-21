import { Router } from 'express';

import {
    getIngresos,
    getIngreso,
    createIngreso,
    updateIngreso,
    deleteIngreso
} from '../../controllers/ingresos/ingresosController.js';


const IngresoRouter = Router();

IngresoRouter.get('/', getIngresos);
IngresoRouter.get('/:id', getIngreso);
IngresoRouter.post('/', createIngreso);
IngresoRouter.put('/:id', updateIngreso);
IngresoRouter.delete('/:id', deleteIngreso);

export default IngresoRouter;