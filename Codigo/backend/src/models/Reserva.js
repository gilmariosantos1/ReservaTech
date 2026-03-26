import { DataTypes } from 'sequelize';

export default (sequelize, DataTypes) => {
  const Reserva = sequelize.define('Reserva', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    colaboradorId: { type: DataTypes.INTEGER, allowNull: false },
    equipamentoId: { type: DataTypes.INTEGER, allowNull: false },
    dataReserva: { type: DataTypes.DATEONLY, allowNull: false },
    dataEntrega: { type: DataTypes.DATEONLY, allowNull: false },
    horarioInicio: { type: DataTypes.TIME, allowNull: false },
    horarioFim: { type: DataTypes.TIME, allowNull: false },
    motivo: { type: DataTypes.STRING, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: false },
  }, {
    tableName: 'Reservas',
    timestamps: true,
    underscored: true,
  });

  Reserva.associate = (models) => {
    Reserva.belongsTo(models.Colaborador, {
      foreignKey: 'colaboradorId',
      as: 'colaborador',
    });
    Reserva.belongsTo(models.Equipamento, {
      foreignKey: 'equipamentoId',
      as: 'equipamento',
    });
  };

  return Reserva;
};