import { Sequelize } from 'sequelize';
//import dotenv from 'dotenv';
//dotenv.config();

const dialect = process.env.DB_DIALECT || 'sqlite';
const isSQLite = dialect === 'sqlite';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'reserva_tech',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || null,
  {
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
    dialect,
    storage: isSQLite ? (process.env.DB_STORAGE || 'src/database/dev.sqlite') : undefined,
    logging: false,
    define: { underscored: true },
  }
);

sequelize.authenticate()
  .then(() => console.log('Conectado com sucesso!'))
  .catch(err => console.error('Erro ao conectar:', err));

export default sequelize;