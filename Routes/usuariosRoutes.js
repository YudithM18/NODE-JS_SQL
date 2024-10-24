const express = require('express');
const usuariosController = require ('../Controllers/usuariosController')
const router = express.Router();

    // Definir las rutas
    router.get('/', usuariosController.obtenerUsuarios);
    router.post('/', usuariosController.crearNuevosUsuarios); // Obtener todos los Usuarios
    router.put('/:id', usuariosController.actualizarUsuarios);
    router.delete('/:id', usuariosController.eliminarUsuarios);

    module.exports = router;