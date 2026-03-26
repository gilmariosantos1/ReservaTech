const { body, param } = require('express-validator');

const allowedStatus = ['reservado', 'emprestado', 'pendente', 'cancelado', 'finalizado'];

function isValidTime(value) {
  return /^([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/.test(value);
}

const reservaValidators = {
  id: [
    param('id')
      .isInt({ min: 1 })
      .withMessage('O parâmetro id deve ser um número inteiro positivo.'),
  ],
  create: [
    body('colaboradorId')
      .isInt({ min: 1 })
      .withMessage('colaboradorId deve ser um número inteiro positivo.'),
    body('equipamentoId')
      .isInt({ min: 1 })
      .withMessage('equipamentoId deve ser um número inteiro positivo.'),
    body('dataReserva')
      .notEmpty()
      .withMessage('Data da reserva é obrigatória.')
      .isISO8601()
      .withMessage('Data da reserva deve estar no formato YYYY-MM-DD.'),
    body('dataEntrega')
      .notEmpty()
      .withMessage('Data da entrega é obrigatória.')
      .isISO8601()
      .withMessage('Data da entrega deve estar no formato YYYY-MM-DD.')
      .custom((value, { req }) => {
        if (new Date(value) < new Date(req.body.dataReserva)) {
          throw new Error('Data de entrega não pode ser anterior à data de reserva.');
        }

        return true;
      }),
    body('horarioInicio')
      .notEmpty()
      .withMessage('Horário de início é obrigatório.')
      .custom((value) => isValidTime(value))
      .withMessage('Horário de início deve estar no formato HH:mm ou HH:mm:ss.'),
    body('horarioFim')
      .notEmpty()
      .withMessage('Horário de fim é obrigatório.')
      .custom((value, { req }) => {
        if (!isValidTime(value)) {
          throw new Error('Horário de fim deve estar no formato HH:mm ou HH:mm:ss.');
        }

        const inicio = req.body.horarioInicio;
        if (isValidTime(inicio) && value <= inicio) {
          throw new Error('Horário de fim deve ser maior que o horário de início.');
        }

        return true;
      }),
    body('motivo')
      .trim()
      .notEmpty()
      .withMessage('Motivo é obrigatório.')
      .isLength({ min: 3, max: 255 })
      .withMessage('Motivo deve ter entre 3 e 255 caracteres.'),
    body('status')
      .trim()
      .toLowerCase()
      .isIn(allowedStatus)
      .withMessage(`Status inválido. Valores aceitos: ${allowedStatus.join(', ')}.`),
  ],
  update: [
    body('colaboradorId')
      .optional()
      .isInt({ min: 1 })
      .withMessage('colaboradorId deve ser um número inteiro positivo.'),
    body('equipamentoId')
      .optional()
      .isInt({ min: 1 })
      .withMessage('equipamentoId deve ser um número inteiro positivo.'),
    body('dataReserva')
      .optional()
      .isISO8601()
      .withMessage('Data da reserva deve estar no formato YYYY-MM-DD.'),
    body('dataEntrega')
      .optional()
      .isISO8601()
      .withMessage('Data da entrega deve estar no formato YYYY-MM-DD.'),
    body('horarioInicio')
      .optional()
      .custom((value) => isValidTime(value))
      .withMessage('Horário de início deve estar no formato HH:mm ou HH:mm:ss.'),
    body('horarioFim')
      .optional()
      .custom((value, { req }) => {
        if (!isValidTime(value)) {
          throw new Error('Horário de fim deve estar no formato HH:mm ou HH:mm:ss.');
        }

        const inicio = req.body.horarioInicio;
        if (inicio && isValidTime(inicio) && value <= inicio) {
          throw new Error('Horário de fim deve ser maior que o horário de início.');
        }

        return true;
      }),
    body('motivo')
      .optional()
      .trim()
      .isLength({ min: 3, max: 255 })
      .withMessage('Motivo deve ter entre 3 e 255 caracteres.'),
    body('status')
      .optional()
      .trim()
      .toLowerCase()
      .isIn(allowedStatus)
      .withMessage(`Status inválido. Valores aceitos: ${allowedStatus.join(', ')}.`),
  ],
};

function createReservaController(reservaModel) {
  return {
    async list(req, res, next) {
      try {
        const reservas = await reservaModel.listAll();
        return res.status(200).json(reservas);
      } catch (error) {
        return next(error);
      }
    },

    async getById(req, res, next) {
      try {
        const reserva = await reservaModel.findById(Number(req.params.id));

        if (!reserva) {
          return res.status(404).json({ message: 'Reserva não encontrada.' });
        }

        return res.status(200).json(reserva);
      } catch (error) {
        return next(error);
      }
    },

    async create(req, res, next) {
      try {
        const createdReserva = await reservaModel.create(req.body);
        return res.status(201).json(createdReserva);
      } catch (error) {
        return next(error);
      }
    },

    async update(req, res, next) {
      try {
        const updatedReserva = await reservaModel.update(Number(req.params.id), req.body);

        if (!updatedReserva) {
          return res.status(404).json({ message: 'Reserva não encontrada.' });
        }

        return res.status(200).json(updatedReserva);
      } catch (error) {
        return next(error);
      }
    },

    async remove(req, res, next) {
      try {
        const removed = await reservaModel.remove(Number(req.params.id));

        if (!removed) {
          return res.status(404).json({ message: 'Reserva não encontrada.' });
        }

        return res.status(204).send();
      } catch (error) {
        return next(error);
      }
    },
  };
}

module.exports = {
  createReservaController,
  reservaValidators,
};