import { Router } from 'express';
import * as controller from '../controllers/ReservaController.js';
import validateRequest from '../middlewares/validateRequest.js'
import { reservaValidators } from '../controllers/ReservaController.js';

const router = Router();

router.post('/reserva', reservaValidators.create, validateRequest, controller.create);

export default router;