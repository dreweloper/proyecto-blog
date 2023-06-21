# El Blog

:construction: En proceso de desarrollo :construction:

---

## Descripción

Este proyecto consiste en una aplicación web de un blog con entradas, desarrollada desde el lado del servidor. Proporciona una interfaz intuitiva para que los usuarios puedan leer y buscar entradas, y también permite al administrador iniciar sesión y gestionar las publicaciones.

## Características principales

- Interfaz de usuario responsive con menú hamburguesa en dispositivos móviles.
- Funcionalidad de búsqueda que busca coincidencias en el título y el extracto de las entradas.
- Manejo de errores para mejorar la experiencia del usuario y facilitar la depuración.
- Paginación para mostrar las entradas tanto en el lado del usuario como en el dashboard del admin.
- Autenticación de administrador con JSON Web Tokens (JWT) almacenado en las cookies.
- Utilización de express-validator para la validación de los campos del formulario de inicio de sesión.
- Base de datos noSQL (MongoDB) para almacenar las entradas y los usuarios.
- Renderización dinámica de vistas utilizando el motor de plantillas EJS.
- Documentación del código utilizando JSDoc para una mejor comprensión y mantenibilidad.
- Gestión de imágenes utilizando el paquete Multer.

## Despliegue

La aplicación está desplegada como un servicio web en Render. Puedes acceder a travésd el siguiente enlace: [https://proyecto-blog.onrender.com](https://proyecto-blog.onrender.com).

---

## Instalación

1. Clona el repositorio en tu máquina local:

   ```
   git clone https://github.com/DREWiex/proyecto-blog.git
   ```

2. Accede al directorio del proyecto:

   ```
   cd proyecto-blog
   ```

3. Instala las dependencias del proyecto:

   ```
   npm install
   ```

4. Configura las variables de entorno:

   - Crea un archivo `.env` en la raíz del proyecto.
   - Define las siguientes variables de entorno en el archivo `.env`:
   ```
   PORT = 3000
   URI_CONNECT = <URL_de_conexión_a_MongoDB>
   JWT_SECRET_KEY = <Clave_secreta_JSON_Web_Tokens>
   URL_BASE_API_ENTRIES = http://localhost:3000/api/entries
   URL_BASE_API_USERS = http://localhost:3000/api/users
   URL_BASE_MULTER = http://localhost:3000/images
   ```

5. Inicia la aplicación:

   ```
   npm start
   ```

   La aplicación estará disponible en `http://localhost:3000`.

---

## Uso

### Interfaz de usuario

- Navega a `http://localhost:3000` en tu navegador para acceder a la página principal del blog.
- Explora las entradas disponibles y haz clic en el botón "Leer más" para ver una entrada individual.
- Utiliza el campo de búsqueda para buscar entradas por título o extracto.
- Navega a las páginas de resultados de búsqueda y utiliza la paginación para ver más resultados.

### Inicio de sesión del administrador

- Accede a `http://localhost:3000/login` en tu navegador.
- Ingresa las credenciales de administrador para iniciar sesión.
- Una vez autenticado, serás redirigido al dashboard del administrador.

### Dashboard del administrador

- En el dashboard, puedes crear nuevas entradas, editar entradas existentes y eliminar entradas.
- Utiliza las opciones del menú para realizar las operaciones deseadas.

---

## Obtención de las credenciales del administrador

Si estás interesado en contribuir a este proyecto o necesitas acceder al dashboard del administrador, por favor, ponte en contacto conmigo para solicitar las credenciales. Puedes hacerlo de la siguiente manera:

1. Envíame un correo electrónico a [dreweloper@gmail.com](mailto:dreweloper@gmail.com) indicando el motivo de tu solicitud.
2. Proporciona información relevante sobre tu contribución o el propósito de acceso al dashboard del administrador.
3. Te responderé a la brevedad posible con las instrucciones y las credenciales necesarias.

Ten en cuenta que las credenciales del administrador son sensibles y se deben manejar de manera confidencial. Por favor, no compartas las credenciales con terceros y asegúrate de utilizarlas de acuerdo con los lineamientos y políticas establecidas.