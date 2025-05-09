const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ error: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
};
