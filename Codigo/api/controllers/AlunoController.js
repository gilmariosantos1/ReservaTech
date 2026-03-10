const { body, param } = require('express-validator');

const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

const alunoValidators = {
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
    body('matricula')
      .trim()
      .notEmpty()
      .withMessage('Matrícula é obrigatória.')
      .isLength({ min: 3, max: 30 })
      .withMessage('Matrícula deve ter entre 3 e 30 caracteres.'),
    body('cpf')
      .optional()
      .trim()
      .matches(cpfRegex)
      .withMessage('Informe um CPF válido.'),
    body('telefone')
      .optional()
      .trim()
      .matches(phoneRegex)
      .withMessage('Informe um telefone válido.'),
    body('dataNascimento')
      .optional()
      .isISO8601()
      .withMessage('Data de nascimento deve estar no formato YYYY-MM-DD.'),
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
    body('matricula')
      .optional()
      .trim()
      .isLength({ min: 3, max: 30 })
      .withMessage('Matrícula deve ter entre 3 e 30 caracteres.'),
    body('cpf')
      .optional()
      .trim()
      .matches(cpfRegex)
      .withMessage('Informe um CPF válido.'),
    body('telefone')
      .optional()
      .trim()
      .matches(phoneRegex)
      .withMessage('Informe um telefone válido.'),
    body('dataNascimento')
      .optional()
      .isISO8601()
      .withMessage('Data de nascimento deve estar no formato YYYY-MM-DD.'),
  ],
};

function createAlunoController(alunoModel) {
  return {
    async list(req, res, next) {
      try {
        const alunos = await alunoModel.listAll();
        return res.status(200).json(alunos);
      } catch (error) {
        return next(error);
      }
    },

    async getById(req, res, next) {
      try {
        const aluno = await alunoModel.findById(Number(req.params.id));

        if (!aluno) {
          return res.status(404).json({ message: 'Aluno não encontrado.' });
        }

        return res.status(200).json(aluno);
      } catch (error) {
        return next(error);
      }
    },

    async create(req, res, next) {
      try {
        const createdAluno = await alunoModel.create(req.body);
        return res.status(201).json(createdAluno);
      } catch (error) {
        return next(error);
      }
    },

    async update(req, res, next) {
      try {
        const updatedAluno = await alunoModel.update(Number(req.params.id), req.body);

        if (!updatedAluno) {
          return res.status(404).json({ message: 'Aluno não encontrado.' });
        }

        return res.status(200).json(updatedAluno);
      } catch (error) {
        return next(error);
      }
    },

    async remove(req, res, next) {
      try {
        const removed = await alunoModel.remove(Number(req.params.id));

        if (!removed) {
          return res.status(404).json({ message: 'Aluno não encontrado.' });
        }

        return res.status(204).send();
      } catch (error) {
        return next(error);
      }
    },
  };
}

module.exports = {
  createAlunoController,
  alunoValidators,
};