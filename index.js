const express = require('express');
const { sequelize } = require('./models'); // Importa la conexión a la base de datos
const habitacionRoutes = require('./Routes/habitacionRoutes'); // Importa las rutas
const metodos_pagosRoutes = require('./Routes/metodos_pagoRoutes');
const pagosRoutes = require('./Routes/pagosRoutes');
const reservasRoutes = require('./Routes/reservasRoutes');
const statusReserveRoutes = require('./Routes/statusReserveRoutes');
const statusRoomRoutes = require('./Routes/statusRoomRoutes');
const usuariosoutes = require('./Routes/usuariosRoutes');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware para parsear JSON

// Probar la conexión con la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('No se pudo conectar a la base de datos:', error));

// Usar las rutas
app.use('/habitaciones', habitacionRoutes);
app.use('/metodos',  metodos_pagosRoutes);
app.use('/pagos',  pagosRoutes);
app.use('/reservas', reservasRoutes);
app.use('/statusReserve', statusReserveRoutes);
app.use('/statusRoom', statusRoomRoutes);
app.use('/usuarios', usuariosoutes);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});