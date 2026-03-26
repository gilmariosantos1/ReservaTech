import { Router } from 'express';
import * as controller from '../controllers/ReservaController.js';
import validateRequest from '../middlewares/validateRequest.js'
import { reservaValidators } from '../controllers/ReservaController.js';

const router = Router();

const reservaController = controller.createReservaController(reservaModel);

router.post('/reserva', reservaValidators.create, validateRequest, reservaController.create);

export default router;