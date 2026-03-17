import db from '../models/index.js';
import { Op } from 'sequelize';

class CursosController {
    async index(req, res) {
        try {
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 10;
            const search = req.query.q || '';

            const offset = (page - 1) * limit;

            const whereClause = search ? {
                nome: {
                    [Op.like]: `%${search}%`
                }
            } : {};

            const { count, rows } = await db.Curso.findAndCountAll({
                where: whereClause,
                limit,
                offset,
                order: [['createdAt', 'DESC']]
            });

            return res.status(200).json({
                data: rows,
                pagination: {
                    total: count,
                    page,
                    limit,
                    totalPages: Math.ceil(count / limit)
                }
            });
        } catch (error) {
            console.error('ListCursos error:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }

    async store(req, res) {
        try {
            const { nome, descricao } = req.body;

            if (!nome) {
                return res.status(400).json({ error: 'Nome é obrigatório' });
            }

            const curso = await db.Curso.create({ nome, descricao });

            return res.status(201).json(curso);
        } catch (error) {
            console.error('CreateCurso error:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default new CursosController();
