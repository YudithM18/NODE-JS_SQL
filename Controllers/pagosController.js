// Importamos el modelo 'Pagos' desde el archivo de modelos.
const { Pagos } = require('../models'); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

// Función para obtener todos los pagos.
const obtenerPagos = async (req, res) => {
  try {
    // Busca todos los pagos en la base de datos.
    const pago = await Pagos.findAll(); 
    // Envía la lista de pagos como respuesta con un código de estado 200 (OK).
    res.status(200).json(pago);
  } catch (error) {
    // Imprimir error para depuración
    console.error(error); 
    // En caso de error, envía un mensaje de error con un código de estado 500 (Error interno del servidor).
    res.status(500).json({ error: 'Error al obtener los pagos.' });
  }
};

// Función para crear nuevos pagos.
const crearNuevosPagos = async (req, res) => {
  try {
    // Desestructura los datos del cuerpo de la solicitud.
    const { id_reserva, total_pago, fecha_pago, id_metodo_pago } = req.body;
    // Crea un nuevo pago en la base de datos.
    const pago = await Pagos.create({
      id_reserva, 
      total_pago, 
      fecha_pago, 
      id_metodo_pago
    });
    // Envía el nuevo pago creado como respuesta con un código de estado 201 (Creado).
    res.status(201).json(pago);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al crear el pago' });
  }
};

// Función para actualizar un pago existente.
const actualizarPagos = async(req, res) => {
  try {
    // Obtiene el ID del pago a actualizar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Desestructura los nuevos datos del cuerpo de la solicitud.
    const { id_reserva, total_pago, fecha_pago, id_metodo_pago } = req.body;
    // Busca el pago por su ID.
    const pago = await Pagos.findByPk(id);
    // Si no se encuentra el pago, envía un mensaje de error con un código de estado 404 (No encontrado).
    if (!pago) {
      return res.status(404).json({ error: 'Pago no encontrado.' });
    }

    // Actualiza el pago encontrado.
    await pago.update({ id_reserva, total_pago, fecha_pago, id_metodo_pago });
    // Envía el pago actualizado como respuesta con un código de estado 200.
    res.status(200).json(pago);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al actualizar pago.' });
  }
};

// Función para eliminar un pago.
const eliminarPagos = async(req, res) => {
  try {
    // Obtiene el ID del pago a eliminar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Busca el pago por su ID.
    const pago = await Pagos.findByPk(id);
    // Si no se encuentra el pago, envía un mensaje de error con un código de estado 404.
    if (!pago) return res.status(404).json({ error: 'Pago no encontrado.' });
    
    // Elimina el pago encontrado.
    await pago.destroy();
    // Envía una respuesta vacía con un código de estado 204 (Sin contenido).
    res.status(204).send();
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al eliminar pago.' });
  }
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación.
module.exports = { obtenerPagos, crearNuevosPagos, actualizarPagos, eliminarPagos };
