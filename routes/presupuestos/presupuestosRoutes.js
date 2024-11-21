import { Router } from 'express';

import {
    getPresupuestos,
    getPresupuesto,
    createPresupuesto,
    updatePresupuesto,
    deletePresupuesto
} from '../../controllers/presupuestos/presupuestosController.js';


const presupuestoRouter = Router();

presupuestoRouter.get('/', getPresupuestos);
presupuestoRouter.get('/:id', getPresupuesto);
presupuestoRouter.post('/', createPresupuesto);
presupuestoRouter.put('/:id', updatePresupuesto);
presupuestoRouter.delete('/:id', deletePresupuesto);

export default presupuestoRouter;