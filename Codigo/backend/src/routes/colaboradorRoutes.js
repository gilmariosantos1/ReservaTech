import { Router } from 'express';
import { createColaboradorController, colaboradorValidators } from '../controllers/ColaboradorController.js';
import validateRequest from '../middlewares/validateRequest.js';

const router = Router();

const controllers = createColaboradorController();

router.get('/', controllers.list);

router.get(
  '/:id',
  colaboradorValidators.id,
  validateRequest,
  controllers.getById
);

router.post(
  '/',
  colaboradorValidators.create,
  validateRequest,
  controllers.create
);

router.put(
  '/:id',
  colaboradorValidators.update,
  validateRequest,
  controllers.update
);

router.delete(
  '/:id',
  colaboradorValidators.id,
  validateRequest,
  controllers.remove
);

export default router;