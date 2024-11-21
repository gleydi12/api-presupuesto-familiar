import { Router } from 'express';

import {
    getDepositos,
    getDeposito,
    createDeposito,
    updateDeposito,
    deleteDeposito
} from '../../controllers/depositos/depositosController.js';


const DepositoRouter = Router();

DepositoRouter.get('/', getDepositos);
DepositoRouter.get('/:id', getDeposito);
DepositoRouter.post('/', createDeposito);
DepositoRouter.put('/:id', updateDeposito);
DepositoRouter.delete('/:id', deleteDeposito);

export default DepositoRouter;