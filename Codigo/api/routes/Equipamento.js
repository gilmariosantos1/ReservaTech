const express = require('express');
const router = express.Router();

const equipamentoController = require('../controllers/equipamento.controller');

router.get('/', equipamentoController.listarEquipamentos);
router.get('/:id', equipamentoController.buscarEquipamentoPorId);
router.post('/', equipamentoController.criarEquipamento);
router.put('/:id', equipamentoController.atualizarEquipamento);
router.delete('/:id', equipamentoController.deletarEquipamento);

module.exports = router;