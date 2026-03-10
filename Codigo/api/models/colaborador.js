import { DataTypes, Model } from 'sequelize';

export default class Colaborador extends Model {
  static initModel(sequelize) {
    super.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: DataTypes.STRING(100), allowNull: false, unique: true },
        matricula: { type: DataTypes.INTEGER},
        email: { type: DataTypes.STRING(100)},
        cpf: { type: DataTypes.STRING(14)},
        datadenascimento: {type: DataTypes.data},
        telefone: {type:DataTypes.STRING(15)},
      },
      {
        sequelize,
        modelName: 'Colaborador',
        tableName: 'Colaborador',
        timestamps: true,
        underscored: true,
      }
    );
    return this;
  }
}
