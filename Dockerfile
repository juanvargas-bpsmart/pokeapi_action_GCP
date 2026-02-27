# 1. Usamos una imagen oficial de Node.js como base
FROM node:18-slim

# 2. Creamos la carpeta de la app dentro del contenedor
WORKDIR /usr/src/app

# 3. Copiamos los archivos de dependencias para instalar primero
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install --only=production

# 5. Copiamos todo el resto de tu código (html, css, js, server.js)
COPY . .

# 6. Informamos que la app escucha en el puerto 8080
EXPOSE 8080

# 7. Comando para arrancar el servidor
CMD [ "node", "server.js" ]
