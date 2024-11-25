# Imagen base de Node.js
FROM node:20-alpine

# Crear el directorio de la app
WORKDIR /usr/src/app

# Copiar package.json e instalar dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar el resto del código
COPY . .

# Exponer el puerto de Next.js
EXPOSE 3000

# Comando por defecto
CMD ["npm", "run", "dev"]
