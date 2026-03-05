import { Router } from 'express';
import * as controllers from '../controllers/ColaboradorController.js';
import { body } from 'express-validator';
import auth from '../middlewares/validateRequest.js';

const router = Router();

router.get('/', controllers.listar);
router.get('/:id', controllers.obter);
router.post('/', auth, [
    
])
