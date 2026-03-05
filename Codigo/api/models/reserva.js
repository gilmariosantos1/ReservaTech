import { DataTypes, Model } from 'sequelize';

export default class Reserva extends Model {
  static initModel(sequelize) {
    super.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        
        colaboradorId: { type: DataTypes.INTEGER, allowNull: false, references: {
            model: 'colaboradores',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT', },
        
        equipamentoId: { type: DataTypes.INTEGER, allowNull: false, references: {
            model: 'equipamentos',
            key: 'id',
          },
          onUpdate: 'CASCADE',
          onDelete: 'RESTRICT', },
        
        dataReserva: { type: DataTypes.DATEONLY, allowNull: false },
        
        dataEntrega: { type: DataTypes.DATEONLY, allowNull: false },
        
        horarioInicio: { type: DataTypes.TIME, allowNull: false },
        
        horarioFim: { type: DataTypes.TIME, allowNull: false },
     
        motivo: { type: DataTypes.STRING, allowNull: false },
        
     
      },
      {
        sequelize,
        modelName: 'reserva',
        tableName: 'reservas',
        timestamps: true,
        underscored: true,
      }
    );
    return this;
    
  }

  static associate(models) {
    this.belongsTo(models.Colaborador, {
      foreignKey: 'colaboradorId',
      as: 'colaborador',
    });

    this.belongsTo(models.Equipamento, {
      foreignKey: 'equipamentoId',
      as: 'equipamento',
    });
  }
}

 