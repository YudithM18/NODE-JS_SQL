const express = require('express');
const metodos_pagoController = require ('../Controllers/metodos_pagoController')
const router = express.Router();

    // Definir las rutas
    router.get('/', metodos_pagoController.obtenerMetodos);
    router.post('/', metodos_pagoController.crearNuevoMetodos); // Obtener todos los metodos de pagos
    router.put('/:id', metodos_pagoController.actualizarMetodos);
    router.delete('/:id', metodos_pagoController.eliminarMetodos);

    module.exports = router;