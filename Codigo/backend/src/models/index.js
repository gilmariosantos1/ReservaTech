import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { fileURLToPath } from 'url';
import configData from '../config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || 'development';
const config = configData[env] || configData.development;

const db = {};

let sequelize;

// Prioridade: env vars > SQLite em memória > configuração de arquivo
if (process.env.DB_DIALECT === 'sqlite') {
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: process.env.DB_STORAGE || './database.sqlite',
        logging: false
    });
} else if (config && config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else if (config) {
    sequelize = new Sequelize(config.database || 'reservatech', config.username || 'root', config.password || '', config);
} else {
    // Fallback: SQLite local
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: './database.sqlite',
        logging: false
    });
}

// Carregar dinamicamente os modelos
const modelDirs = [__dirname];

for (const dir of modelDirs) {
    if (fs.existsSync(dir)) {
        const files = fs.readdirSync(dir).filter(file => {
            return (
                file.indexOf('.') !== 0 &&
                file !== path.basename(__filename) &&
                file.slice(-3) === '.js' &&
                file !== 'index.js'
            );
        });

        for (const file of files) {
            const modelPath = path.join(dir, file);
            const modelModule = await import(`file://${modelPath}`);
            const modelFunction = modelModule.default;
            if (typeof modelFunction === 'function') {
                const model = modelFunction(sequelize, DataTypes);
                db[model.name] = model;
            }
        }
    }
}

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
