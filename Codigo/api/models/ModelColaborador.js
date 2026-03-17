
import { DataTypes, Model } from 'sequelize';

export default class Colaborador extends Model {
  static initModel(sequelize) {
    super.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        nome: { type: DataTypes.STRING(120), allowNull: false },
        email: { type: DataTypes.STRING(150), allowNull: false, unique: true, validate: { isEmail: true } },
        curso_id: { type: DataTypes.INTEGER, allowNull: true },
      },
      {
        sequelize,
        modelName: 'Colaborador',
        tableName: 'Colaboradores',
        timestamps: true,
        underscored: true,
      }
    );
    return this;
  }
}
