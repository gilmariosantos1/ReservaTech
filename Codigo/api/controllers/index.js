const {
  createColaboradorController,
  colaboradorValidators,
} = require('./colaborador.controller');
const {
  createEquipamentoController,
  equipamentoValidators,
} = require('./equipamento.controller');
const {
  createReservaController,
  reservaValidators,
} = require('./reserva.controller');
const {
  createAlunoController,
  alunoValidators,
} = require('./aluno.controller');

module.exports = {
  createColaboradorController,
  colaboradorValidators,
  createEquipamentoController,
  equipamentoValidators,
  createReservaController,
  reservaValidators,
  createAlunoController,
  alunoValidators,
};