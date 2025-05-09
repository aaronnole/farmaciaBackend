const { Medicamento } = require('../models'); // Ajusta según cómo exportes los modelos

const getMedicamentos = async (req, res) => {
  try {
    const medicamentos = await Medicamento.findAll();
    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener medicamentos' });
  }
};

module.exports = { getMedicamentos };
