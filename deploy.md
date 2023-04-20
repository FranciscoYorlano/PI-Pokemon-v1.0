# Deploy

Para lograr un buen despliegue con entornos personalizados para producción y
desarrollo, es necesario separar adecuadamente las configuraciones para cada
entorno. Aquí tienes una serie de pasos que te pueden ayudar a lograrlo:

Crear archivos de configuración para entornos de desarrollo y producción:
Crea dos archivos .env en la raíz de tu proyecto: uno llamado .env.development
y otro llamado .env.production. Estos archivos contendrán las variables de entorno
específicas para cada entorno. Por ejemplo, las conexiones a bases de datos, tokens de acceso, etc.

Además hay que crear un archivo .env con la variable NODE_ENV

```bash
NODE_ENV=development
```

## Actualizar el archivo .gitignore:

Asegúrate de que los archivos .env no sean rastreados por Git, para evitar exponer
información sensible en tus repositorios. Añade lo siguiente en tu archivo .gitignore:

```bash
.env.*
```

## Cargar las variables de entorno:

En tu archivo index.js o en el archivo principal de tu proyecto, importa la librería
dotenv y carga las variables de entorno utilizando dotenv.config({ path: ... }). Puedes utilizar
una condición para cargar el archivo .env correcto dependiendo del entorno en el que se esté
ejecutando la aplicación. Por ejemplo:

```bash
const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env.production' });
} else {
  dotenv.config({ path: '.env.development' });
}
```

## Actualizar los scripts en package.json:

Antes instalar cross-env para que el package.json no tenga problemas (si los hay) para acceder a NODE_ENV.

```bash
npm install --save-dev cross-env

```

Añade la variable de entorno NODE_ENV a tus scripts de inicio en package.json. Esto permitirá que tu aplicación se ejecute en el entorno adecuado:

```json
"scripts": {
    "start": "cross-env NODE_ENV=development nodemon -L",
    "start:prod": "cross-env NODE_ENV=production node index.js",
    "test": "mocha -w ./tests/**/*.spec.js"
},
```

## Configurar tu servidor de producción:

En tu servidor de producción, asegúrate de tener instaladas las dependencias necesarias
(por ejemplo, Node.js y npm). Luego, clona tu repositorio y ejecuta npm install para
instalar todas las dependencias. No olvides crear el archivo .env.production con las
variables de entorno adecuadas para el entorno de producción.

Iniciar la aplicación en el servidor de producción:
Una vez que hayas configurado tu servidor de producción, utiliza el script start:prod
para iniciar la aplicación en modo de producción:

```bash
npm run start:prod
```

Con estos pasos, deberías poder tener un despliegue exitoso con entornos personalizados
para desarrollo y producción. Si deseas automatizar el proceso de despliegue, puedes
considerar utilizar servicios como GitHub Actions, GitLab CI/CD o Jenkins, que te
permitirán automatizar el proceso de construcción y despliegue en función de eventos
específicos, como push a una rama específica o creación de un nuevo tag.

---

### Pregunta

DB_USER=postgres
DB_PASSWORD=admin
DB_HOST=localhost
DB_NAME=pokemon

EXT_API_URL=https://pokeapi.co/api/v2
Este seria mi .env actual, como configuro los dos .env que me hiciste crear para produccion y desarrollo?
Por otro lado como configuro la base de datos bien? Tanto en mi .env correspondiente como en railway?

---

Primero, vamos a separar las variables de entorno en dos archivos diferentes: .env.development y .env.production. Puedes mantener las variables comunes en ambos archivos, como EXT_API_URL, pero para las variables relacionadas con la base de datos, es posible que desees tener diferentes configuraciones para desarrollo y producción.

Aquí hay un ejemplo de cómo podrían verse los dos archivos:

.env.development

```bash
DB_USER=postgres_dev
DB_PASSWORD=dev_password
DB_HOST=localhost
DB_NAME=pokemon_dev
```

EXT_API_URL=https://pokeapi.co/api/v2
.env.production

```bash
DB_USER=postgres_prod
DB_PASSWORD=prod_password
DB_HOST=production_host
DB_NAME=pokemon_prod

EXT_API_URL=https://pokeapi.co/api/v2
```

Asegúrate de reemplazar los valores de usuario, contraseña, host y nombre de la base de datos con los valores correctos para cada entorno.

Ahora, para configurar la base de datos, primero debes asegurarte de que tus archivos .env estén cargados en tu aplicación como se mencionó en la respuesta anterior. Luego, puedes utilizar las variables de entorno en tu configuración de Sequelize. Aquí tienes un ejemplo de cómo podría verse el archivo de configuración de Sequelize (config/database.js):

```js
const dotenv = require("dotenv");

if (process.env.NODE_ENV === "production") {
    dotenv.config({ path: ".env.production" });
} else {
    dotenv.config({ path: ".env.development" });
}

module.exports = {
    development: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "postgres",
    },
    production: {
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "postgres",
    },
};
```

En cuanto a Railway, puedes utilizar su plataforma para crear y configurar una base de datos PostgreSQL para tu entorno de producción. Una vez que hayas creado la base de datos, Railway te proporcionará una URL de conexión que incluye el nombre de usuario, la contraseña, el host y el nombre de la base de datos. Puedes utilizar esta URL para configurar las variables de entorno en tu archivo .env.production.

Por ejemplo, si Railway te proporciona una URL como esta:

```bash
postgres://user:password@host:5432/database
Deberías configurar tus variables de entorno en .env.production de la siguiente manera:

makefile
Copy code
DB_USER=user
DB_PASSWORD=password
DB_HOST=host
DB_NAME=database
```

No olvides reemplazar "user", "password", "host" y "database" con los valores correctos proporcionados por Railway.

Una vez que hayas configurado correctamente tus archivos .env, asegúrate de que las variables de entorno se utilicen en tu aplicación donde corresponda y de que la base de datos esté configurada correctamente en ambos entornos.

---

### Pregunta

Me das el paso a paso detallado para hacer el deploy del client con el package.json que te mande ? Lo quiero deployar en vercel, a diferencia del back.
Ademas necesito que me ayudes a configurar el back con el front

---

Claro, aquí tienes un paso a paso detallado para desplegar el cliente (front-end) en Vercel y conectarlo con el back-end:

1. Instalar Vercel CLI:
   Si aún no lo has hecho, instala la CLI de Vercel ejecutando el siguiente comando:

```bash
npm install -g vercel
```

2. Iniciar sesión en Vercel:
   Ejecuta vercel login e ingresa tus credenciales de Vercel (correo electrónico y contraseña).

3. Preparar el front-end para el despliegue:
   En el directorio del proyecto front-end, asegúrate de tener un archivo package.json con un script de construcción. Por ejemplo, si estás utilizando React, tu archivo package.json podría incluir un script de construcción como este:

```json
"scripts": {
    "build": "react-scripts build",
    // ...
},
```

Si ya tienes un script de construcción en tu package.json, puedes omitir este paso.

4. Desplegar el front-end en Vercel:
   En el directorio del proyecto front-end, ejecuta vercel para desplegar la aplicación. Vercel detectará automáticamente el marco de trabajo que estás utilizando y configurará el despliegue en consecuencia. Una vez que el despliegue haya finalizado, Vercel te proporcionará una URL (por ejemplo, https://my-app.vercel.app) donde podrás acceder a tu aplicación front-end.

5. Configurar las variables de entorno en Vercel:
   En la consola de Vercel, ve a la configuración de tu proyecto y busca la sección de "Environment Variables" (Variables de entorno). Aquí, deberás agregar las variables de entorno que necesitas para que tu front-end se comunique con tu back-end, como la URL del back-end. Por ejemplo, podrías agregar una variable llamada REACT_APP_API_URL con el valor de la URL de tu back-end.

6. Conectar el front-end con el back-end:
   En tu código fuente del front-end, utiliza las variables de entorno que has configurado en Vercel para conectar tu aplicación con el back-end. Por ejemplo, si estás utilizando axios para hacer solicitudes al back-end, podrías configurar la URL base de la siguiente manera:

```javascript
axios.defaults.baseURL = process.env.REACT_APP_API_URL;
```

Asegúrate de que estés utilizando el prefijo correcto para las variables de entorno en tu marco de trabajo (por ejemplo, en React, las variables de entorno deben comenzar con REACT*APP*).

7. Reconstruir y desplegar el front-end:
   Después de realizar los cambios necesarios en el código del front-end, ejecuta vercel nuevamente para desplegar la nueva versión de tu aplicación.

Con estos pasos, deberías haber desplegado con éxito tu aplicación front-end en Vercel y conectado con tu back-end. Si experimentas algún problema durante el proceso, asegúrate de revisar la documentación de Vercel y las configuraciones de tu proyecto.

---

### Pregunta

If you don't want to include a polyfill, you can use an empty module like this:
resolve.fallback: { "os": false }

webpack compiled with 3 errors and 1 warning
Me tira este error siempre que intento usar dotenv en mi frontend. Que puede ser? Use create react app

---

El error que estás experimentando se debe a que dotenv está diseñado para ser utilizado en un entorno Node.js, mientras que Create React App se ejecuta en un entorno del navegador. Los módulos fs, path y os son módulos específicos de Node.js que no están disponibles en el navegador.

Para solucionar este problema, puedes utilizar la funcionalidad incorporada de Create React App para manejar las variables de entorno en lugar de usar dotenv. Create React App ya tiene en cuenta el manejo de variables de entorno con un prefijo específico. Aquí te muestro cómo hacerlo:

1. En tu proyecto de Create React App, crea un archivo .env en la raíz de tu proyecto (si aún no lo has hecho).

2. Agrega tus variables de entorno al archivo .env, pero asegúrate de agregar el prefijo REACT*APP* a cada nombre de variable. Por ejemplo:

```bash
REACT_APP_API_URL=https://my-backend-api.com
```

3. En tu código fuente, accede a las variables de entorno usando process.env.REACT*APP*[nombre de la variable]. Por ejemplo:

```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

Al seguir estos pasos, ya no necesitarás utilizar dotenv en tu proyecto de Create React App, y en su lugar, utilizarás la funcionalidad incorporada para manejar las variables de entorno. Esto debería solucionar los errores que estás experimentando.
