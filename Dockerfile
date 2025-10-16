# syntax=docker/dockerfile:1

FROM node:20-alpine
WORKDIR /app

# Instala TODAS las dependencias (incluye dev) para asegurar que Nuxt esté disponible
ENV NPM_CONFIG_PRODUCTION=false \
    HOST=0.0.0.0 \
    PORT=3000 \
    NODE_ENV=production

# Instala deps primero para cachear
COPY package.json package-lock.json .npmrc ./
RUN npm install --include=dev --ignore-scripts

# Copia el resto del código y ejecuta los scripts y el build
COPY . .
RUN npm run postinstall --if-present && npm run build

EXPOSE 3000

# Soporta plataformas que llaman `npm start`
CMD ["node", ".output/server/index.mjs"]