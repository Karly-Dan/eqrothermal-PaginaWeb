# Etapa 1: dependencias
FROM node:20-alpine AS deps
WORKDIR /app

# Copiamos solo los manifiestos primero (mejor caché)
COPY package*.json ./

# Instalamos todas las dependencias (incluye devDependencies necesarias para el build)
RUN npm ci --no-audit --no-fund

# Etapa 2: build Nuxt (genera .output)
FROM node:20-alpine AS builder
WORKDIR /app
ENV NODE_ENV=development
ENV NUXT_TELEMETRY_DISABLED=1

# Copiamos node_modules desde deps
COPY --from=deps /app/node_modules ./node_modules
# Copiamos el resto del código fuente
COPY . .

# Prepara y construye (postinstall se ejecutó ya como parte de npm ci si aplica)
RUN npm run build

# Etapa 3: runtime mínimo (SSR)
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0
ENV NUXT_TELEMETRY_DISABLED=1

# Copiamos solo la salida generada
COPY --from=builder /app/.output ./.output

# Exponemos el puerto
EXPOSE 3000
USER node

# Comando de arranque (Nitro / Node preset)
CMD ["node", ".output/server/index.mjs"]
