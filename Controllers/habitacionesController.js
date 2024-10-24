// Importamos el modelo 'Habitacion' desde el archivo de modelos.
const { Habitacion } = require('../models'); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

// Función para obtener todas las habitaciones.
const obtenerHabitacion = async (req, res) => {
  try {
    // Busca todas las habitaciones en la base de datos.
    const habitaciones = await Habitacion.findAll();
    // Envía la lista de habitaciones como respuesta con un código de estado 200 (OK).
    res.status(200).json(habitaciones);
  } catch (error) {
    // Imprimir error para depuración
    console.error(error); 
    // En caso de error, envía un mensaje de error con un código de estado 500 (Error interno del servidor).
    res.status(500).json({ error: 'Error al obtener la habitacion.' });
  }
};

// Función para crear nuevas habitaciones.
const crearNuevaHabitaciones = async (req, res) => {
  try {
    // Desestructura los datos del cuerpo de la solicitud.
    const { room_number, type, price, id_status_room } = req.body;
    // Crea una nueva habitación en la base de datos.
    const habitaciones = await Habitacion.create({
      room_number, 
      type, 
      price, 
      id_status_room 
    });
    // Envía la nueva habitación creada como respuesta con un código de estado 201 (Creado).
    res.status(201).json(habitaciones);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al crear habitacion' });
  }
};

// Función para actualizar una habitación existente.
const actualizarHabitaciones = async(req, res) => {
  try {
    // Obtiene el ID de la habitación a actualizar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Desestructura los nuevos datos del cuerpo de la solicitud.
    const { room_number, type, price, id_status_room } = req.body;
    // Busca la habitación por su ID.
    const habitaciones = await Habitacion.findByPk(id);
    // Si no se encuentra la habitación, envía un mensaje de error con un código de estado 404 (No encontrado).
    if (!habitaciones) {
      return res.status(404).json({ error: 'Habitacion no encontrada.' });
    }

    // Actualiza la habitación encontrada.
    await habitaciones.update({ room_number, type, price, id_status_room });
    // Envía la habitación actualizada como respuesta con un código de estado 200.
    res.status(200).json(habitaciones);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al actualizar informacion de la habitacion.' });
  }
};

// Función para eliminar una habitación.
const eliminarHabitaciones = async(req, res) => {
  try {
    // Obtiene el ID de la habitación a eliminar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Busca la habitación por su ID.
    const habitaciones = await Habitacion.findByPk(id);
    // Si no se encuentra la habitación, envía un mensaje de error con un código de estado 404.
    if (!habitaciones) return res.status(404).json({ error: 'Habitacion no encontrada.' });
    
    // Elimina la habitación encontrada.
    await habitaciones.destroy();
    // Envía una respuesta vacía con un código de estado 204 (Sin contenido).
    res.status(204).send();
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al eliminar la  habitacion.' });
  }
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación.
module.exports = { obtenerHabitacion, crearNuevaHabitaciones, actualizarHabitaciones, eliminarHabitaciones };
