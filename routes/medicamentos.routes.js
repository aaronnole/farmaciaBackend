const express = require('express');
const router = express.Router();
const { getMedicamentos } = require('../controllers/medicamento.controller');

// GET /medicamentos
router.get('/', getMedicamentos);

module.exports = router;
