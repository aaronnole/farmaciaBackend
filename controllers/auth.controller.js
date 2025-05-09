const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Usuario } = require('../models');
require('dotenv').config();

exports.register = async (req, res) => {
  const { username, email, password, rol } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const nuevoUsuario = await Usuario.create({
      username,
      password: hashedPassword,
      email,
      rol: rol || 'usuario', // Establece el valor por defecto si no se envía el rol
    });

    res.status(201).json({ mensaje: 'Usuario registrado', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar usuario', detalle: error.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });

    const esValido = await bcrypt.compare(password, usuario.password);
    if (!esValido) return res.status(401).json({ error: 'Contraseña incorrecta' });

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.json({ mensaje: 'Login exitoso', token, usuario: { id: usuario.id, nombre: usuario.nombre, rol: usuario.rol } });
  } catch (error) {
    res.status(500).json({ error: 'Error en el login', detalle: error.message });
  }
};
