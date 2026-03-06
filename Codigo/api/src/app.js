import express from 'express';
import cors from 'cors';

import authRoutes from './routes/auth.routes.js';
import cursosRoutes from './routes/cursos.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rota Health Check para o teste
app.get('/health', (req, res) => {
    return res.status(200).json({ status: 'ok' });
});

// Rotas da API
app.use('/auth', authRoutes);
app.use('/cursos', cursosRoutes);

export default app;
