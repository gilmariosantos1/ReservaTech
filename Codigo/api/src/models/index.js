import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import { fileURLToPath } from 'url';
import configData from '../config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const env = process.env.NODE_ENV || 'development';
const config = configData[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Em ambiente de teste do test app fornecido, as configs de ambiente são passadas via process.env e sobrepostas antes de criar banco.
if (process.env.DB_DIALECT === 'sqlite') {
    sequelize = new Sequelize({
        dialect: 'sqlite',
        storage: ':memory:', // default para os testes, override localmente para SQLite se desejado
        logging: false
    });
}

// Carregar dinamicamente os modelos
const files = fs.readdirSync(__dirname).filter(file => {
    return (
        file.indexOf('.') !== 0 &&
        file !== path.basename(__filename) &&
        file.slice(-3) === '.js'
    );
});

for (const file of files) {
    const modelModule = await import(`./${file}`);
    const modelInit = modelModule.default;
    if (typeof modelInit === 'function') {
        const model = modelInit(sequelize, DataTypes);
        db[model.name] = model;
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
