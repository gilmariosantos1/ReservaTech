import express from 'express';
import CursosController from '../controllers/CursosController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', CursosController.index);
router.post('/', authMiddleware, CursosController.store);

export default router;
