const { body, param } = require('express-validator');

const equipamentoValidators = {
  id: [
    param('id')
      .isInt({ min: 1 })
      .withMessage('O parâmetro id deve ser um número inteiro positivo.'),
  ],
  create: [
    body('nome')
      .trim()
      .notEmpty()
      .withMessage('Nome do equipamento é obrigatório.')
      .isLength({ min: 2, max: 100 })
      .withMessage('Nome do equipamento deve ter entre 2 e 100 caracteres.'),
    body('numeroSerie')
      .trim()
      .notEmpty()
      .withMessage('Número de série é obrigatório.')
      .isLength({ min: 3, max: 80 })
      .withMessage('Número de série deve ter entre 3 e 80 caracteres.'),
    body('descricao')
      .optional()
      .trim()
      .isLength({ max: 255 })
      .withMessage('Descrição deve ter no máximo 255 caracteres.'),
  ],
  update: [
    body('nome')
      .optional()
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage('Nome do equipamento deve ter entre 2 e 100 caracteres.'),
    body('numeroSerie')
      .optional()
      .trim()
      .isLength({ min: 3, max: 80 })
      .withMessage('Número de série deve ter entre 3 e 80 caracteres.'),
    body('descricao')
      .optional()
      .trim()
      .isLength({ max: 255 })
      .withMessage('Descrição deve ter no máximo 255 caracteres.'),
  ],
};

function createEquipamentoController(equipamentoModel) {
  return {
    async list(req, res, next) {
      try {
        const equipamentos = await equipamentoModel.listAll();
        return res.status(200).json(equipamentos);
      } catch (error) {
        return next(error);
      }
    },

    async getById(req, res, next) {
      try {
        const equipamento = await equipamentoModel.findById(Number(req.params.id));

        if (!equipamento) {
          return res.status(404).json({ message: 'Equipamento não encontrado.' });
        }

        return res.status(200).json(equipamento);
      } catch (error) {
        return next(error);
      }
    },

    async create(req, res, next) {
      try {
        const createdEquipamento = await equipamentoModel.create(req.body);
        return res.status(201).json(createdEquipamento);
      } catch (error) {
        return next(error);
      }
    },

    async update(req, res, next) {
      try {
        const updatedEquipamento = await equipamentoModel.update(Number(req.params.id), req.body);

        if (!updatedEquipamento) {
          return res.status(404).json({ message: 'Equipamento não encontrado.' });
        }

        return res.status(200).json(updatedEquipamento);
      } catch (error) {
        return next(error);
      }
    },

    async remove(req, res, next) {
      try {
        const removed = await equipamentoModel.remove(Number(req.params.id));

        if (!removed) {
          return res.status(404).json({ message: 'Equipamento não encontrado.' });
        }

        return res.status(204).send();
      } catch (error) {
        return next(error);
      }
    },
  };
}

module.exports = {
  createEquipamentoController,
  equipamentoValidators,
};