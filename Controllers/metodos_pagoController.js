// Importamos el modelo 'Metodos_de_pagos' desde el archivo de modelos.
const { Metodos_de_pagos } = require('../models'); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

// Función para obtener todos los métodos de pago.
const obtenerMetodos = async (req, res) => {
  try {
    // Busca todos los métodos de pago en la base de datos.
    const metodo_pago = await Metodos_de_pagos.findAll(); 
    // Envía la lista de métodos de pago como respuesta con un código de estado 200 (OK).
    res.status(200).json(metodo_pago);
  } catch (error) {
    // Imprimir error para depuración
    console.error(error); 
    // En caso de error, envía un mensaje de error con un código de estado 500 (Error interno del servidor).
    res.status(500).json({ error: 'Error al obtener los metodos.' });
  }
};

// Función para crear un nuevo método de pago.
const crearNuevoMetodos = async (req, res) => {
  try {
    // Desestructura el método del cuerpo de la solicitud.
    const { metodo } = req.body;
    // Crea un nuevo método de pago en la base de datos.
    const metodo_pago = await Metodos_de_pagos.create({
      metodo
    });
    // Envía el nuevo método creado como respuesta con un código de estado 201 (Creado).
    res.status(201).json(metodo_pago);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al crear el metodo' });
  }
};

// Función para actualizar un método de pago existente.
const actualizarMetodos = async(req, res) => {
  try {
    // Obtiene el ID del método a actualizar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Desestructura el nuevo método del cuerpo de la solicitud.
    const { metodo } = req.body;
    // Busca el método de pago por su ID.
    const metodo_pago = await Metodos_de_pagos.findByPk(id);
    // Si no se encuentra el método, envía un mensaje de error con un código de estado 404 (No encontrado).
    if (!metodo_pago) {
      return res.status(404).json({ error: 'Metodo no encontrado.' });
    }

    // Actualiza el método encontrado.
    await metodo_pago.update({ metodo });
    // Envía el método actualizado como respuesta con un código de estado 200.
    res.status(200).json(metodo_pago);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al actualizar el metodo.' });
  }
};

// Función para eliminar un método de pago.
const eliminarMetodos = async(req, res) => {
  try {
    // Obtiene el ID del método a eliminar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Busca el método de pago por su ID.
    const metodo_pago = await Metodos_de_pagos.findByPk(id);
    // Si no se encuentra el método, envía un mensaje de error con un código de estado 404.
    if (!metodo_pago) return res.status(404).json({ error: 'Metodo no encontrado.' });
    
    // Elimina el método encontrado.
    await metodo_pago.destroy();
    // Envía una respuesta vacía con un código de estado 204 (Sin contenido).
    res.status(204).send();
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al eliminar el metodo.' });
  }
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación.
module.exports = { obtenerMetodos, crearNuevoMetodos, actualizarMetodos, eliminarMetodos };
