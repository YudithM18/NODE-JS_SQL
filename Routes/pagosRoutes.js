const express = require('express');
const pagosController = require ('../Controllers/pagosController')
const router = express.Router();

    // Definir las rutas
    router.get('/', pagosController.obtenerPagos);
    router.post('/', pagosController.crearNuevosPagos); // Obtener todos los pagos
    router.put('/:id', pagosController.actualizarPagos);
    router.delete('/:id', pagosController.eliminarPagos);

    module.exports = router;