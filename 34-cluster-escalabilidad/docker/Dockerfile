FROM node

# creando un computador, va a tener una carpeta "app"
WORKDIR /app


# le voy pasar el package.json
COPY package.json .
# /app/package.json

# instalar las dependencias
RUN npm install


# copiar todo el proyecto /app/
COPY . .


# puerto que va a exponer
EXPOSE 8080


# comando que se va a ejecutar cuando se levante el contenedor
CMD ["npm", "start"]





