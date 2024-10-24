// Importamos el modelo 'Status_room' desde el archivo de modelos.
const { Status_room } = require('../models'); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

// Función para obtener todos los estados de habitación.
const obtenerStatusRoom = async (req, res) => {
  try {
    // Busca todos los estados de habitación en la base de datos.
    const status_room = await Status_room.findAll(); 
    // Envía la lista de estados de habitación como respuesta con un código de estado 200 (OK).
    res.status(200).json(status_room);
  } catch (error) {
    // Imprimir error para depuración
    console.error(error); 
    // En caso de error, envía un mensaje de error con un código de estado 500 (Error interno del servidor).
    res.status(500).json({ error: 'Error al obtener los estados de habitacion.' });
  }
};

// Función para crear un nuevo estado de habitación.
const crearNuevoStatusRoom = async (req, res) => {
  try {
    // Desestructura el estado del cuerpo de la solicitud.
    const { status } = req.body;
    // Crea un nuevo estado de habitación en la base de datos.
    const status_room = await Status_room.create({
      status
    });
    // Envía el nuevo estado creado como respuesta con un código de estado 201 (Creado).
    res.status(201).json(status_room);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al crear el estados de habitacion' });
  }
};

// Función para actualizar un estado de habitación existente.
const actualizarStatusRoom = async(req, res) => {
  try {
    // Obtiene el ID del estado a actualizar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Desestructura el nuevo estado del cuerpo de la solicitud.
    const { status } = req.body;
    // Busca el estado de habitación por su ID.
    const status_room = await Status_room.findByPk(id);
    // Si no se encuentra el estado, envía un mensaje de error con un código de estado 404 (No encontrado).
    if (!status_room) {
      return res.status(404).json({ error: 'Estados de habitacion no encontrados.' });
    }

    // Actualiza el estado de habitación encontrado.
    await status_room.update({ status });
    // Envía el estado actualizado como respuesta con un código de estado 200.
    res.status(200).json(status_room);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al actualizar el estados de habitacion.' });
  }
};

// Función para eliminar un estado de habitación.
const eliminarStatusRoom = async(req, res) => {
  try {
    // Obtiene el ID del estado a eliminar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Busca el estado de habitación por su ID.
    const status_room = await Status_room.findByPk(id);
    // Si no se encuentra el estado, envía un mensaje de error con un código de estado 404.
    if (!status_room) return res.status(404).json({ error: 'Estados de habitacion no encontrados.' });
    
    // Elimina el estado encontrado.
    await status_room.destroy();
    // Envía una respuesta vacía con un código de estado 204 (Sin contenido).
    res.status(204).send();
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al eliminar el estados de habitacion.' });
  }
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación.
module.exports = { obtenerStatusRoom, crearNuevoStatusRoom, actualizarStatusRoom, eliminarStatusRoom };
