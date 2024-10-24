API de Gestión de Reservas para un hotel permite la interacción 
entre diferentes sistemas y aplicaciones para gestionar reservas de habitaciones, 
disponibilidad y otros servicios.

FUNCIONES PRINCIPALES DE LA API:

- Permite a los usuarios consultar la disponibilidad de habitaciones en fechas específicas.

- Facilita la creación de nuevas reservas, incluyendo las fechas, tipo de habitación y datos del huésped.

- Permite a los usuarios modificar detalles de una reserva existente o cancelarla si es necesario.

ENPOINTS: 

La API se organiza en diferentes endpoints, cada uno de los cuales
realiza una función específica. Por ejemplo:

GET: Consulta de disponibilidad.
POST: Creación de una nueva reserva.
PUT/{id}: Modificación de una reserva existente.
DELETE/{id}: Cancelación de una reserva.

MÉTODOS HTTP: 
Utiliza métodos HTTP para definir la acción que se desea realizar (GET, POST, PUT, DELETE).

FLUJO: 

- Un cliente busca disponibilidad de habitaciones a través de una aplicación.
- El cliente realiza una reserva, enviando los datos necesarios a través de la API.
- La API confirma la reserva y la almacena en el sistema de gestión del hotel.

Esta API facilita la comunicación entre clientes y el sistema del hotel, haciendo que el proceso de reserva sea rápido, eficiente y seguro. Ayuda a mejorar la experiencia del cliente y optimiza la operación del hotel.