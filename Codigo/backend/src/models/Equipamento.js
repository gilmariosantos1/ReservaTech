import { DataTypes } from 'sequelize';

export default (sequelize, DataTypes) => {
  const Equipamento = sequelize.define('Equipamento', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING(100), allowNull: false },
    numeroSerie: { type: DataTypes.STRING(80), allowNull: false, unique: true },
    descricao: { type: DataTypes.STRING(255), allowNull: true },
  }, {
    tableName: 'Equipamentos',
    timestamps: true,
    underscored: true,
  });

  return Equipamento;
};