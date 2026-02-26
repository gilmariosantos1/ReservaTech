import dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import cors from 'cors'
const app = express ();
//import app from './app.js';
//import db from './models/index.js';

const PORT = process.env.PORT || 3000;
app.use(cors());
async function start() {
  try {
   /* console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);

    await db.sequelize.authenticate();
    console.log('✅Conexão com banco OK');

    if (process.env.DB_SYNC === 'true') {
      await db.sequelize.sync({ alter: true });
      console.log('🔧Sync aplicado');
    }
*/
    app.listen(PORT, () => {
      console.log(`🚀Server rodando em http://localhost:${PORT}`);
    });

  } catch (err) {
    console.error('❌Erro ao iniciar aplicação:', err);
    process.exit(1);
  }
}

start();