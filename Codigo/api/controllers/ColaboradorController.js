const { body, param } = require('express-validator');

const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

const colaboradorValidators = {
  id: [
    param('id')
      .isInt({ min: 1 })
      .withMessage('O parâmetro id deve ser um número inteiro positivo.'),
  ],
  create: [
    body('nome')
      .trim()
      .notEmpty()
      .withMessage('Nome é obrigatório.')
      .isLength({ min: 3, max: 120 })
      .withMessage('Nome deve ter entre 3 e 120 caracteres.'),
    body('email')
      .trim()
      .notEmpty()
      .withMessage('E-mail é obrigatório.')
      .isEmail()
      .withMessage('Informe um e-mail válido.')
      .normalizeEmail(),
    body('telefone')
      .trim()
      .notEmpty()
      .withMessage('Telefone é obrigatório.')
      .matches(phoneRegex)
      .withMessage('Informe um telefone válido.'),
    body('cpf')
      .trim()
      .notEmpty()
      .withMessage('CPF é obrigatório.')
      .matches(cpfRegex)
      .withMessage('Informe um CPF válido.'),
    body('dataNascimento')
      .notEmpty()
      .withMessage('Data de nascimento é obrigatória.')
      .isISO8601()
      .withMessage('Data de nascimento deve estar no formato YYYY-MM-DD.'),
    body('matricula')
      .trim()
      .notEmpty()
      .withMessage('Matrícula é obrigatória.')
      .isLength({ min: 3, max: 30 })
      .withMessage('Matrícula deve ter entre 3 e 30 caracteres.'),
  ],
  update: [
    body('nome')
      .optional()
      .trim()
      .isLength({ min: 3, max: 120 })
      .withMessage('Nome deve ter entre 3 e 120 caracteres.'),
    body('email')
      .optional()
      .trim()
      .isEmail()
      .withMessage('Informe um e-mail válido.')
      .normalizeEmail(),
    body('telefone')
      .optional()
      .trim()
      .matches(phoneRegex)
      .withMessage('Informe um telefone válido.'),
    body('cpf')
      .optional()
      .trim()
      .matches(cpfRegex)
      .withMessage('Informe um CPF válido.'),
    body('dataNascimento')
      .optional()
      .isISO8601()
      .withMessage('Data de nascimento deve estar no formato YYYY-MM-DD.'),
    body('matricula')
      .optional()
      .trim()
      .isLength({ min: 3, max: 30 })
      .withMessage('Matrícula deve ter entre 3 e 30 caracteres.'),
  ],
};

function createColaboradorController(colaboradorModel) {
  return {
    async list(req, res, next) {
      try {
        const colaboradores = await colaboradorModel.listAll();
        return res.status(200).json(colaboradores);
      } catch (error) {
        return next(error);
      }
    },

    async getById(req, res, next) {
      try {
        const colaborador = await colaboradorModel.findById(Number(req.params.id));

        if (!colaborador) {
          return res.status(404).json({ message: 'Colaborador não encontrado.' });
        }

        return res.status(200).json(colaborador);
      } catch (error) {
        return next(error);
      }
    },

    async create(req, res, next) {
      try {
        const createdColaborador = await colaboradorModel.create(req.body);
        return res.status(201).json(createdColaborador);
      } catch (error) {
        return next(error);
      }
    },

    async update(req, res, next) {
      try {
        const updatedColaborador = await colaboradorModel.update(Number(req.params.id), req.body);

        if (!updatedColaborador) {
          return res.status(404).json({ message: 'Colaborador não encontrado.' });
        }

        return res.status(200).json(updatedColaborador);
      } catch (error) {
        return next(error);
      }
    },

    async remove(req, res, next) {
      try {
        const removed = await colaboradorModel.remove(Number(req.params.id));

        if (!removed) {
          return res.status(404).json({ message: 'Colaborador não encontrado.' });
        }

        return res.status(204).send();
      } catch (error) {
        return next(error);
      }
    },
  };
}

module.exports = {
  createColaboradorController,
  colaboradorValidators,
};