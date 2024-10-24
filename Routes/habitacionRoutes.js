const express = require('express');
const habitacionesController = require ('../Controllers/habitacionesController')
const router = express.Router();

    // Definir las rutas
    router.get('/', habitacionesController.obtenerHabitacion);
    router.post('/', habitacionesController.crearNuevaHabitaciones); // Obtener todas las habitaciones
    router.put('/:id', habitacionesController.actualizarHabitaciones);
    router.delete('/:id', habitacionesController.eliminarHabitaciones);

    module.exports = router;