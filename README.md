# **Aprendiendo Docker**
## **Explicación del proyecto -  Clase 9**
### **package.json**

```
- Administrador de paquetes para Node, configuración de arranque del proyecto, versionamientó, manual de instrucciones que le dice a Node qué herramientas necesita para funcionar y cómo debe ejecutarse.
```


# 
### Comandos despues de crear el package.json

$ npm init --> Genera archivo package.json

$ npm install  express --> Instala el Framework, crea carpeta node_modules y archivo package-lock.json

$ npm install -d morgan --> Instala en devdependencies previsualizador para ver los Logs de la terminal

$ npm install -g nodemon --> Instala paquete de forma global que permitepackage-lock.json reiniciar el servicio

$ npm install --save sequelize --> Instala sequelize para conectar con la bd de mysql

$ npm install --save mysql2 --> Descargar e integrar la librería de MySQL en el proyecto de Node.js

$ npm install dotenv --> Instala una librería que permite a Node.js leer archivos .env.

$ node src/index.js     --> Levanta el proyecto de BACK  directamente y ejecuta lo que esta en el archivo index.js

$ npm run dev    ---> Levanta el proyecto de BACK, ejecuta un alias o "acceso directo" definido en la sección "scripts" del package.json


# 
### **Dockerfile**
```
- Crea una imagen del proyecto, archivo con instrucciónes de como levantar el proyecto
```

#
### Comandos despues de crear el Dockerfile

$ docker build -t mi-app-node .   --> construye una imagen nueva con el nombre mi-app-node siguiendo las instrucciones que están en el archivo Dockerfile 

$ docker build -t mi-app-node:1.0.1 .   --> Reconstruye la imagen con una nueva versión

$ docker run -p 3000:3000 mi-app-node:1.0.1 --> Crear un contenedor de la imagen creada.
izq puerto por el que se accede (se puede cambiar) der puerto por el que funciona


# 
### **docker-compose.yml**
```
-  Orquesta diferentes contenedores,  reemplaza el comando $ docker run .......
```

#
### Comandos despues de crear el docker-compose.yml

$ docker compose up -d  --> empieza a descarga la imagen y levantar el contenedor en segundo plano con la parametrización en el archivo docker-compose.yml

$ docker compose up -d  --build --> Reconstruye el contenedor cuando el codigo ha sido modificado

$ docker compose up -d postgres-db   --> levanta solo el servicio de postgres

$ docker compose stop NAME  --> detiene un contenedor por nombre

$ docker compose down -v   --> detener y eliminar contenedores, redes, volúmenes e imágenes creadas por docker-compose up

# 
### **conexion.js**
```
-  Conecta el proyecto de Node.js con el servicio de mysql utilizando el ORM sequelize
```
#
### **.env**
```
-  Almacena variables de entorno, que son datos sensibles o configuraciones que pueden cambiar dependiendo de dónde se ejecute el código.
```
#
### **dockerignore**
```
-  Sirve para proteger la integridad y la eficiencia de tu imagen de Docker, le indica a Docker qué archivos o carpetas no debe copiar dentro del contenedor durante el proceso de construcción (build).
```
#
### **index.js**
```
-  El archivo index.js (o a veces llamado app.js o server.js) es el punto de entrada de tu aplicación. Si tu proyecto fuera un edificio, el index.js sería la recepción: es el lugar donde todo se conecta, se organiza y se pone en marcha.
```
#
### **router/index.js**
```
-  Sirve como un Director de Tráfico. Su función es definir los "caminos" (endpoints) que los usuarios pueden visitar y conectarlos con la lógica de negocio que está en los controladores.

Tenerlo en una carpeta separada ayuda a que tu archivo principal (index.js de la raíz) no se llene de cientos de líneas de rutas, manteniendo el proyecto organizado.
```
#
### **models/User.js y models/Producto.js**
```
-  Representación de la tabla de base de datos en código JavaScript. En el mundo de Sequelize, esto se llama Modelo.

Sirve para dos cosas principales:

Estructura: Le dice a la base de datos qué columnas debe tener la tabla (nombre, correo, etc.) y de qué tipo son.

Interfaz: Te permite hacer cosas como User.create() o User.findAll() desde tus controladores sin escribir código SQL manualmente.
```
#
### **producto.controller.js**
```
-  El Controlador es el "cerebro" de la operación. Mientras que el modelo define cómo lucen los datos, el controlador define qué hacer con ellos. Su función es:

* Recibir la petición del usuario (vía req).

* Procesar la lógica (buscar en la base de datos, actualizar, borrar).

* Responder al usuario (vía res) con un código de estado (200, 201, 500) y la información solicitada.
```
#
## **Esquema de Comunicación y Dependencias**
### 1. El Bloque de Infraestructura (Docker & Config)
```
-  Estos archivos preparan el "terreno" para que la aplicación exista:

docker-compose.yml: Es el director de orquesta. Llama al Dockerfile para construir la imagen de Node y utiliza el archivo .env para pasarle las credenciales (como la clave de la BD) al contenedor.

Dockerfile: Es la receta de cocina. Lee el package.json para saber qué librerías instalar (npm install) y luego copia el código fuente (incluyendo el index.js) dentro del contenedor.

.env: Es el almacén de secretos. Sus variables son leídas por config/conexion.js y index.js para saber en qué puerto correr y cómo conectarse a MySQL.
```
### 2. El Corazón de la App (Servidor & Base de Datos)
```
-  Aquí ocurre la conexión lógica:

package.json: Define las dependencias (Express, Sequelize, MySQL2). Sin este archivo, nada en la carpeta models o config funcionaría.

config/conexion.js: Se conecta a la base de datos usando los datos del .env. Este archivo es importado por los Models.

models/User.js y models/Producto.js: Usan la conexión de config/conexion.js para mapear las tablas. A su vez, estos modelos son importados por el Controller.
```
### 3. El Flujo de la Petición (Request Path)
```
Cuando un usuario hace una petición (ej. GET /api/producto), el camino es:

index.js (Raíz): Recibe la petición, activa los middlewares y la delega a...

router/index.js: Mira la URL y dice: "Esta petición la debe manejar la función listar de..."

producto.controller.js: El controlador toma el mando, le pide los datos al models/Producto.js (que a su vez habla con la BD) y finalmente envía la respuesta al usuario.
```

#
```
- La explicación del codigo de cada archivo esta en el archivo .txt Explicacion de archivos
```