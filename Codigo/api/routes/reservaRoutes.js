import { Router } from 'express';
import * as controller from '../controllers/ReservaController.js';
import { body } from 'express-validator';

const router = Router();

router.post('/', [
    body('matricula').trim().isLength({ max: 6 })
]);