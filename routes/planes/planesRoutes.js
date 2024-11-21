import { Router } from 'express';

import {
    getPlanes,
    getPlan,
    createPlan,
    updatePlan,
    deletePlan
} from '../../controllers/planes/planesController.js';


const PlanRouter = Router();

PlanRouter.get('/', getPlanes);
PlanRouter.get('/:id', getPlan);
PlanRouter.post('/', createPlan);
PlanRouter.put('/:id', updatePlan);
PlanRouter.delete('/:id', deletePlan);

export default PlanRouter;