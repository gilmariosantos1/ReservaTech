import express from 'express';
import cors from 'cors';

import colaboradorRoutes from './routes/colaboradorRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// Rota Health Check para o teste
app.get('/health', (req, res) => {
    return res.status(200).json({ status: 'ok' });
});

// Rotas da API
app.use('/colaborador', colaboradorRoutes);

export default app;
