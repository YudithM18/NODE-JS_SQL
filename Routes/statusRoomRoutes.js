const express = require('express');
const statusRoomController = require ('../Controllers/statusRoomController')
const router = express.Router();

    // Definir las rutas
    router.get('/', statusRoomController.obtenerStatusRoom);
    router.post('/', statusRoomController.crearNuevoStatusRoom); // Obtener todos los status room
    router.put('/:id', statusRoomController.actualizarStatusRoom);
    router.delete('/:id', statusRoomController.eliminarStatusRoom);

    module.exports = router;