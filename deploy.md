# Deploy

Para lograr un buen despliegue con entornos personalizados para producción y
desarrollo, es necesario separar adecuadamente las configuraciones para cada
entorno. Aquí tienes una serie de pasos que te pueden ayudar a lograrlo:

Crear archivos de configuración para entornos de desarrollo y producción:
Crea dos archivos .env en la raíz de tu proyecto: uno llamado .env.development
y otro llamado .env.production. Estos archivos contendrán las variables de entorno
específicas para cada entorno. Por ejemplo, las conexiones a bases de datos, tokens de acceso, etc.

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

Añade la variable de entorno NODE_ENV a tus scripts de inicio en package.json. Esto permitirá que tu aplicación se ejecute en el entorno adecuado:

```json
"scripts": {
    "start": "NODE_ENV=development nodemon -L",
    "start:prod": "NODE_ENV=production node index.js",
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
