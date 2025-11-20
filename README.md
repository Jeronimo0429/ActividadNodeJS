---

# Proyecto Base API Llegadas

# api-llegadas

Este proyecto es una API desarrollada en Node.js encargada de gestionar registros de llegadas, conectarse a MySQL, consumir archivos JSON de pruebas y ejecutar peticiones desde Postman.

---

## Antes de Iniciar

Empezaremos por explicar los diferentes componentes del proyecto, partiendo de los elementos externos (usbwebserver, Postman, JSON), continuando con los componentes de la API y finalmente la ejecución local.

---

# Arquitectura

La arquitectura del proyecto está dividida en tres capas principales:

* **Infraestructura externa**: USBWebServer (MySQL), phpMyAdmin, JSON de prueba, proyecto Postman.
* **API en Node.js**: Express + MySQL + CORS.
* **Base de datos MySQL** conectada mediante servidor embebido.

```
Cliente REST (Postman)
        ↓
    API Node.js
 (Express + MySQL2)
        ↓
    MySQL Local
 (usbwebserver)
```

---

## API (Node.js)

Corresponde al núcleo del proyecto. Contiene:

* Lógica de negocio básica para las operaciones CRUD.
* Rutas de Express para exponer la API.
* Conector MySQL mediante mysql2.
* Controladores para cada operación.
* Middleware para CORS.
* Archivos JSON utilizados como ejemplo de entrada.

---

## Infraestructura

### usbwebserver

Componente externo que permite correr **MySQL y phpMyAdmin sin instalar nada en el sistema**.

Incluye:

* Servidor MySQL
* phpMyAdmin
* Configuraciones del servidor
* Archivos ejecutables para levantar el entorno local

### Peticiones JSON

Carpeta llamada:

```
Peticiones al API
```

Contiene:

* Payloads para pruebas
* Información estructurada para usar con POST y PUT
* Datos ejemplo para validar la API

### Proyecto Postman

Archivo:

```
API Llegadas.postman_collection.json
```

Incluye:

* Endpoints
* Parámetros
* Headers configurados
* Ejemplos de ejecución

---

# Application

En esta sección se encuentra la configuración general de la API:

* Archivo principal `index.js`
* Integración con Express
* Configuración del puerto
* Registro de rutas
* Conexión con MySQL al iniciar
* Lectura de parámetros configurados

---

## 📝 REQUISITOS PREVIOS

### 🎯 Node.js v22.16.0

Requerido para ejecutar la API.

### 🎯 USBWebserver

Permite correr MySQL y phpMyAdmin sin necesidad de instalación externa.

### 🎯 Postman

Para pruebas funcionales de los endpoints.

---

# 💯 Pasos para ejecutar el proyecto localmente

---

## ✅ PASO 1: Levantar la base de datos con USBWebServer

1. Ingresar a la carpeta:

   ```
   usbwebserver
   ```
2. Ejecutar:

   ```
   USBWebserver.exe
   ```
3. Abrir phpMyAdmin desde el panel del programa.
4. Crear la base de datos o importar un archivo `.sql` si lo tienes.

---

## ✅ PASO 2: Instalar dependencias del proyecto Node.js

Si el proyecto ya está clonado, entrar a la carpeta:

```bash
cd api-llegadas
```

Instalar dependencias:

```bash
npm install
```

Esto instalará:

* express
* mysql2
* cors

---

## ✅ PASO 3: Ejecutar la API

Para iniciar el servidor:

```bash
npm start
```

La API queda disponible en:

```
http://localhost:3000
```

o el puerto especificado en `index.js`.

---

## ✅ PASO 4: Variables de entorno

Puedes configurar un archivo `.env` si lo deseas:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=llegadasdb
PORT=3000
```

O usar valores directos en el archivo de conexión MySQL.

---

## 🧪 PASO 5: Probar la API desde Postman

Importar:

```
API Llegadas.postman_collection.json
```

Desde el menú:

**File → Import → Seleccionar archivo**

Endpoints disponibles incluyen:

* GET /llegadas
* POST /llegadas
* PUT /llegadas/:id
* DELETE /llegadas/:id

Cada uno con payloads configurados.

---

## 🧪 PASO 6: Usar los JSON de prueba

En la carpeta:

```
Peticiones al API
```

Encontrarás archivos como:

* llegada.json
* actualizarLlegada.json
* eliminar.json

Puedes abrirlos y usarlos como "raw JSON" en Postman.

---

## 🌩️ Tecnologías usadas

* Node.js v22.16.0
* Express
* MySQL
* USBWebServer
* CORS
* Postman
* GitHub para versionado

---

## ©️ Propuesta desarrollada por:

**Juan Camilo Mirama Saa**
Actividad – Node.js, MySQL, API REST.

---
