const {
  createColaboradorController,
  colaboradorValidators,
} = require('./ColaboradorController');
const {
  createEquipamentoController,
  equipamentoValidators,
} = require('./EquipamentoController');
const {
  createReservaController,
  reservaValidators,
} = require('./ReservaController');
const {
  createAlunoController,
  alunoValidators,
} = require('./AlunoController');

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