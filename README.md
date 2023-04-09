# Proyecto: Blog

---

## Endpoints

La url base es: *http://localhost:3000*.

|                        **RUTA**                       |                             **DESCRIPCIÓN**                            |
|:-----------------------------------------------------:|:----------------------------------------------------------------------:|
| "/"                                                   | Index.                                                                 |
| "/entry/642d4cb509e9f7345286faa8"                     | Página que muestra el detalle de una entrada por su id.                |
| "/search?search=cielo"                                | Página que muestra los resultados de una búsqueda.                     |
| "/login"                                              | Página que muestra el formulario del login.                            |
| "/dashboard-admin"                                    | Página que muestra el dashboard del admin cuando el login es correcto. |
| "/dashboard-admin/form-new"                           | Página que muestra el formulario para crear una entrada nueva.         |
| "/dashboard-admin/form-edit/642d4cb509e9f7345286faa8" | Página que muestra el formulario para editar una entrada ya existente. |

---

## Admin

Credenciales para acceder al dashboard admin:
- E-mail: **admin@correo.com**
- Password: **123456**

---

## .env

- PORT = **3000**
- URI_CONNECT = **mongodb+srv://admin:admin@drewiex.gaskjhw.mongodb.net/proyecto-blog?retryWrites=true&w=majority**
- URL_BASE_API_ENTRIES = **'http://localhost:3000/api/entries'**
- URL_BASE_API_USERS = **'http://localhost:3000/api/users'**
- URL_BASE_MULTER = **'http://localhost:3000/images'**
- JWT_SECRET_KEY = **ZWxjYWJhbGxvYmxhbmNvZGVzaW1vbmJvbGl2YXI**