const express = require('express');
const statusReserveController = require ('../Controllers/statusReserveController')
const router = express.Router();

    // Definir las rutas
    router.get('/', statusReserveController.obtenerStatusReserve);
    router.post('/', statusReserveController.crearNuevoStatusReserve); // Obtener todos los status Reserve
    router.put('/:id', statusReserveController.actualizarStatusReserve);
    router.delete('/:id', statusReserveController.eliminarStatusReserve);

    module.exports = router;