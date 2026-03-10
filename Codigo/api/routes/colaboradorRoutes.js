import { Router } from 'express';
import * as controllers from '../controllers/ColaboradorController.js';
import { body, param } from 'express-validator';
import validateRequest from '../middlewares/validateRequest.js';

const router = Router();
const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

router.get('/', controllers.list);
router.get('/:id', param('id').isInt({ min: 1 }), controllers.getById);
router.post('/',
  validateRequest,
  [
    body('nome')
      .trim()
      .notEmpty()
      .isLength({ min: 3, max: 120 }),

    body('email')
      .trim()
      .notEmpty()
      .isEmail()
      .normalizeEmail(),

    body('telefone')
      .trim()
      .notEmpty()
      .matches(phoneRegex),

    body('cpf')
      .trim()
      .notEmpty()
      .matches(cpfRegex),

    body('dataNascimento')
      .notEmpty()
      .isISO8601(),

    body('matricula')
      .trim()
      .notEmpty()
      .isLength({ min: 3, max: 30 }),
  ],
  controllers.create
);

router.put('/:id',
  validateRequest,
  [
    body('nome')
      .optional()
      .trim()
      .isLength({ min: 3, max: 120 }),

    body('email')
      .optional()
      .trim()
      .isEmail()
      .normalizeEmail(),

    body('telefone')
      .optional()
      .trim()
      .matches(phoneRegex),

    body('cpf')
      .optional()
      .trim()
      .matches(cpfRegex),

    body('dataNascimento')
      .optional()
      .isISO8601(),

    body('matricula')
      .optional()
      .trim()
      .isLength({ min: 3, max: 30 }),
  ],
  controllers.update
);

router.delete('/:id',
  validateRequest,
  param('id').isInt({ min: 1 }),
  controllers.remove
);

export default router;