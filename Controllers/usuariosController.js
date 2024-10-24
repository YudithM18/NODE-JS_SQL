// Importamos el modelo 'Usuario' desde el archivo de modelos.
const { Usuario } = require('../models'); // Asegúrate de que este nombre coincida con lo que exportas en el archivo de modelos

// Función para obtener todos los usuarios.
const obtenerUsuarios = async (req, res) => {
  try {
    // Busca todos los usuarios en la base de datos.
    const usuarios = await Usuario.findAll(); 
    // Envía la lista de usuarios como respuesta con un código de estado 200 (OK).
    res.status(200).json(usuarios);
  } catch (error) {
    // Imprimir error para depuración
    console.error(error); 
    // En caso de error, envía un mensaje de error con un código de estado 500 (Error interno del servidor).
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
};

// Función para crear nuevos usuarios.
const crearNuevosUsuarios = async (req, res) => {
  try {
    // Desestructura los datos del cuerpo de la solicitud.
    const { user_name, gmail, pass, phone, rol } = req.body;
    // Crea un nuevo usuario en la base de datos.
    const usuarios = await Usuario.create({
      user_name, 
      gmail, 
      pass, 
      phone, 
      rol
    });
    // Envía el nuevo usuario creado como respuesta con un código de estado 201 (Creado).
    res.status(201).json(usuarios);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

// Función para actualizar un usuario existente.
const actualizarUsuarios = async(req, res) => {
  try {
    // Obtiene el ID del usuario a actualizar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Desestructura los datos del cuerpo de la solicitud.
    const { user_name, gmail, pass, phone, rol } = req.body;
    // Busca el usuario por su ID.
    const usuarios = await Usuario.findByPk(id);
    // Si no se encuentra el usuario, envía un mensaje de error con un código de estado 404 (No encontrado).
    if (!usuarios) {
      return res.status(404).json({ error: 'Usuario no encontrado.' });
    }

    // Actualiza los datos del usuario encontrado.
    await usuarios.update({ user_name, gmail, pass, phone, rol });
    // Envía el usuario actualizado como respuesta con un código de estado 200.
    res.status(200).json(usuarios);
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al actualizar al usuario.' });
  }
};

// Función para eliminar un usuario.
const eliminarUsuarios = async(req, res) => {
  try {
    // Obtiene el ID del usuario a eliminar desde los parámetros de la solicitud.
    const { id } = req.params;
    // Busca el usuario por su ID.
    const usuarios = await Usuario.findByPk(id);
    // Si no se encuentra el usuario, envía un mensaje de error con un código de estado 404.
    if (!usuarios) return res.status(404).json({ error: 'Usuario no encontrado.' });
    
    // Elimina el usuario encontrado.
    await usuarios.destroy();
    // Envía una respuesta vacía con un código de estado 204 (Sin contenido).
    res.status(204).send();
  } catch (error) {
    // En caso de error, envía un mensaje de error con un código de estado 500.
    res.status(500).json({ error: 'Error al eliminar al usuario.' });
  }
};

// Exporta las funciones para que puedan ser utilizadas en otras partes de la aplicación.
module.exports = { obtenerUsuarios, crearNuevosUsuarios, actualizarUsuarios, eliminarUsuarios };
