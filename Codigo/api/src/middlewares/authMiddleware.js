import jwt from 'jsonwebtoken';

export default function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: 'Token não providenciado' });
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return res.status(401).json({ error: 'Erro no Token' });
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({ error: 'Token mal formatado' });
    }

    try {
        const secret = process.env.JWT_SECRET || 'fallback_secret_for_dev';
        const decoded = jwt.verify(token, secret);

        // Anexa o ID do usuário na requisição
        req.userId = decoded.id;
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token inválido' });
    }
}
