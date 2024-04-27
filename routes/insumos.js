// insumoRoutes.js
const express = require('express');
const router = express.Router();
const insumoController = require('../controllers/insumoController');

// Ruta para mostrar todos los insumos
router.get('/insumos', insumoController.mostrarInsumos);

// Ruta para crear un nuevo insumo
router.post('/insumos/crear', insumoController.crearInsumo);

// Ruta para editar un insumo existente
router.post('/insumos/editar', insumoController.editarInsumo);

// Ruta para borrar un insumo existente
router.get('/insumos/borrar/:id', insumoController.borrarInsumo);

module.exports = router;
