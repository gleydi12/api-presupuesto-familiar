import { Router } from 'express';

import {
    getGastos,
    getGasto,
    createGasto,
    updateGasto,
    deleteGasto
} from '../../controllers/gastos/gastosController.js';


const GastoRouter = Router();

GastoRouter.get('/', getGastos);
GastoRouter.get('/:id', getGasto);
GastoRouter.post('/', createGasto);
GastoRouter.put('/:id', updateGasto);
GastoRouter.delete('/:id', deleteGasto);

export default GastoRouter;