const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);

// Servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const medicamentoRoutes = require('./routes/medicamentos.routes');
app.use('/medicamentos', medicamentoRoutes);
