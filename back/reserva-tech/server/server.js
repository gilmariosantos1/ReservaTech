import express from 'express'
const app = express()

import { DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize('reservatech', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
})


sequelize.authenticate().then(()=>{
    console.log("Sucesso em conectar com banco de dados!")
}).catch((e)=>{
    console.log("Erro ao conectar com o banco de dados. Erro: ", e)
})


const Funcionario = sequelize.define('funcionario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  matricula: {
    type: DataTypes.BIGINT, // cuidado com precisão em JS (ver nota abaixo)
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  DataNascimento: {
    type: DataTypes.DATEONLY, // formato 'YYYY-MM-DD'
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

const Equipamento = sequelize.define('equipamento', {
  numeroSerie: {
    // Veja as notas abaixo sobre se deve ser BIGINT ou STRING
    type: DataTypes.BIGINT,
    allowNull: false,
    unique: true, // costuma ser único
  },
  descricao: {
    type: DataTypes.STRING(255), // pode ajustar o tamanho
    allowNull: true,
  },
  nome: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
}, {
  tableName: 'equipamentos', // opcional
  underscored: false,
});

const emprestimo = sequelize.define('emprestimo', {
    dataReserva: {
        type: DataTypes.DATEONLY
    },
    dataEntrega: {
        type: DataTypes.DATEONLY
    },
    horarioInicio: {
        type: DataTypes.TIME
    },
    horarioFim: {
        type: DataTypes.TIME
    },
    motivo: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    }
})


const Emprestimo = sequelize.define('emprestimo', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },

  // CHAVE ESTRANGEIRA -> equipamentos.id
  equipamentoId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Equipamento, // ou 'equipamentos'
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT', // evite excluir equipamento com empréstimos vinculados
  },

  // CHAVE ESTRANGEIRA -> funcionarios.id
  funcionarioId: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    references: {
      model: Funcionario, // ou 'funcionarios'
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT', // idem
  },

  dataReserva: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  dataEntrega: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  horarioInicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  horarioFim: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  motivo: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: { len: [3, 255] },
  },
  status: {
    type: DataTypes.ENUM('PENDENTE', 'APROVADO', 'CANCELADO', 'CONCLUIDO'),
    allowNull: false,
    defaultValue: 'PENDENTE',
  },
}, {
  tableName: 'emprestimos',
  timestamps: true,
  indexes: [
    { fields: ['equipamentoId'] },
    { fields: ['funcionarioId'] },
    { fields: ['dataReserva'] },
    { fields: ['status'] },
    // índice composto útil para consultas por equipamento e período
    { fields: ['equipamentoId', 'dataReserva'] },
  ],
  validate: {
    inicioAntesDoFim() {
      // Validação simples combinando data+hora (atenção ao fuso, se necessário)
      const inicio = new Date(`${this.dataReserva}T${this.horarioInicio}`);
      const fim    = new Date(`${this.dataEntrega}T${this.horarioFim}`);
      if (!(inicio < fim)) {
        throw new Error('Intervalo inválido: término deve ser após o início.');
      }
    },
  },
});

// ---- ASSOCIAÇÕES ----
Emprestimo.belongsTo(Equipamento, {
  foreignKey: 'equipamentoId',
  as: 'equipamento',
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Equipamento.hasMany(Emprestimo, {
  foreignKey: 'equipamentoId',
  as: 'emprestimos',
});

Emprestimo.belongsTo(Funcionario, {
  foreignKey: 'funcionarioId',
  as: 'funcionario',
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
});
Funcionario.hasMany(Emprestimo, {
  foreignKey: 'funcionarioId',
  as: 'emprestimos',
});



app.listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000')
})


