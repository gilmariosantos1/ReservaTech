import { DataTypes } from 'sequelize';

export default (sequelize, DataTypes) => {
  const Colaborador = sequelize.define('Colaborador', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING(120), allowNull: false },
    email: { type: DataTypes.STRING(150), allowNull: false, unique: true },
    telefone: { type: DataTypes.STRING(20), allowNull: false },
    cpf: { type: DataTypes.STRING(14), allowNull: false, unique: true },
    dataNascimento: { type: DataTypes.DATEONLY, allowNull: false },
    matricula: { type: DataTypes.STRING(30), allowNull: false, unique: true },
    cursoId: { type: DataTypes.INTEGER, allowNull: true },
  }, {
    tableName: 'Colaboradores',
    timestamps: true,
    underscored: true,
  });

  // Métodos de negócio
  Colaborador.listAll = async function() {
    return await Colaborador.findAll();
  };

  Colaborador.findById = async function(id) {
    return await Colaborador.findByPk(id);
  };

  Colaborador.createInstance = async function(data) {
    return await Colaborador.create(data);
  };

  Colaborador.update = async function(id, data) {
    const colaborador = await Colaborador.findByPk(id);
    if (!colaborador) return null;
    return await colaborador.update(data);
  };

  Colaborador.remove = async function(id) {
    const colaborador = await Colaborador.findByPk(id);
    if (!colaborador) return false;
    await colaborador.destroy();
    return true;
  };

  return Colaborador;
};
