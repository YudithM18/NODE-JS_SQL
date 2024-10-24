const express = require('express');
const reservasController = require ('../Controllers/reservasController')
const router = express.Router();

    // Definir las rutas
    router.get('/', reservasController.obtenerReservas);
    router.post('/', reservasController.crearNuevasReservas); // Obtener todos las reservas
    router.put('/:id', reservasController.actualizarReserva);
    router.delete('/:id', reservasController.eliminarReserva);

    module.exports = router;