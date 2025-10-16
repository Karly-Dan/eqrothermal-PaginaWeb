# syntax=docker/dockerfile:1

# --- Base image ---
FROM node:20-alpine AS base
WORKDIR /app

# --- Dependencies stage ---
FROM base AS deps
# Copy lockfiles to install exact dependencies
COPY package.json package-lock.json .npmrc ./
RUN npm ci

# --- Build stage ---
FROM deps AS build
# Copy the rest of the source code
COPY . .
# Build Nuxt (Nitro) output
RUN npm run build

# --- Runtime stage ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Expose the port that Nitro listens on
EXPOSE 3000

# Copy package.json so launchers that run `npm start` don't fail
COPY package.json ./package.json

# Copy the generated, self-contained Nitro output
COPY --from=build /app/.output ./.output

# If your build externalizes some deps, install them from .output/server/package.json
# Copy npm config if present (optional)
COPY .npmrc ./.npmrc
RUN if [ -f .output/server/package.json ]; then \
			if [ -f .output/server/package-lock.json ]; then \
				npm --prefix .output/server ci --omit=dev; \
			else \
				npm --prefix .output/server install --omit=dev --no-audit --no-fund; \
			fi; \
		fi \
		&& rm -f .npmrc \
		&& chown -R node:node .output

# Run as non-root user provided by the Node image
USER node

# Start the Nitro server
CMD ["node", ".output/server/index.mjs"]