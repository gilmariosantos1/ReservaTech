import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import db from '../models/index.js';

class AuthController {
    async login(req, res) {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: 'Email and password are required' });
            }

            const user = await db.User.findOne({ where: { email } });

            if (!user) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const isValidPassword = await bcrypt.compare(password, user.password_hash);

            if (!isValidPassword) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const token = jwt.sign(
                { id: user.id },
                process.env.JWT_SECRET || 'fallback_secret_for_dev',
                { expiresIn: '1d' }
            );

            return res.status(200).json({
                token,
                user: { id: user.id, nome: user.nome, email: user.email }
            });
        } catch (error) {
            console.error('Login error:', error);
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default new AuthController();
