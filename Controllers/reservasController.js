// Importamos el modelo 'Reservas' desde el archivo de modelos.
const { Reservas } = require('../models'); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

// Función para obtener todas las reservas.
const obtenerReservas = async (req, res) => {
  try {
    // Busca todas las reservas en la base de datos.
    const reserva = await Reservas.findAll(); 
    // Envía la lista de reservas como respuesta con un código de estado 200 (OK).
    res.status(200).json(reserva);
  } catch (error) {
    // Imprimir error para depuración
    console.error(error); 
    // En caso de error, envía un mensaje de error con un código de estado 500 (Error interno del servidor).
    res.status(500).json({ error: 'Error al obtener las reservas.' });
  }
};

// Función para crear nuevas reservas.
const crearNuevasReservas = async (req, res) => {
  try {
    // Desestructura los datos del cuerpo de la solicitud.
    const { id_usuario, fecha_inicio, fecha_fin, id_status_reserve } = req.body;
    // Crea una nueva reserva en la base de datos.
    const reserva = await Reservas.create({
      id_usuario,
      fecha_inicio,
      fecha_fin,
      id_status_reserve
    });
    // Envía la nueva reserva creada como respuesta con un código de estado 201 (Creado).
    res.status(201).json(reserva);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al crear la reserva' });
  }
};

// Función para actualizar una reserva existente.
const actualizarReserva = async(req, res) => {
  try {
    // Obtiene el ID de la reserva a actualizar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Desestructura los nuevos datos del cuerpo de la solicitud.
    const { id_usuario, fecha_inicio, fecha_fin, id_status_reserve } = req.body;
    // Busca la reserva por su ID.
    const reserva = await Reservas.findByPk(id);
    // Si no se encuentra la reserva, envía un mensaje de error con un código de estado 404 (No encontrado).
    if (!reserva) {
      return res.status(404).json({ error: 'Reserva no encontrada.' });
    }

    // Actualiza la reserva encontrada.
    await reserva.update({ id_usuario, fecha_inicio, fecha_fin, id_status_reserve });
    // Envía la reserva actualizada como respuesta con un código de estado 200.
    res.status(200).json(reserva);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al actualizar al reserva.' });
  }
};

// Función para eliminar una reserva.
const eliminarReserva = async(req, res) => {
  try {
    // Obtiene el ID de la reserva a eliminar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Busca la reserva por su ID.
    const reserva = await Reservas.findByPk(id);
    // Si no se encuentra la reserva, envía un mensaje de error con un código de estado 404.
    if (!reserva) return res.status(404).json({ error: 'Reserva no encontrada.' });
    
    // Elimina la reserva encontrada.
    await reserva.destroy();
    // Envía una respuesta vacía con un código de estado 204 (Sin contenido).
    res.status(204).send();
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al eliminar la reserva.' });
  }
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación.
module.exports = { obtenerReservas, crearNuevasReservas, actualizarReserva, eliminarReserva };
