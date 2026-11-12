# ---- Étape 1 : construction du site statique ----
FROM node:22-slim AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY . .
# Adresse publique du site (URLs canoniques, sitemap, robots.txt)
ARG SITE_URL=https://moolah.famproject.cloud
# Adresse d'envoi des formulaires par e-mail
ARG PUBLIC_FORM_ENDPOINT=""
ENV SITE_URL=$SITE_URL PUBLIC_FORM_ENDPOINT=$PUBLIC_FORM_ENDPOINT
RUN npm run build

# ---- Étape 2 : serveur de fichiers minimal, sans droits root ----
FROM nginxinc/nginx-unprivileged:1.29-alpine
COPY deploy/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --retries=3 CMD wget -q --spider http://127.0.0.1:8080/healthz || exit 1