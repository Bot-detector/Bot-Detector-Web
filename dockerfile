# base image
FROM nginx:alpine as base
# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn
COPY . .
RUN yarn build

# development image
FROM base as nginx-dev
# writing it to templates so env are set correctly see https://hub.docker.com/_/nginx - Using environment variables in nginx configuration (new in 1.19)
COPY deploy/dev/docker-nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build-stage /app/dist /usr/share/nginx/html

# production image
FROM base as nginx-prod
# writing it to templates so env are set correctly see https://hub.docker.com/_/nginx - Using environment variables in nginx configuration (new in 1.19)
COPY deploy/prod/docker-nginx.conf /etc/nginx/templates/default.conf.template
COPY --from=build-stage /app/dist /usr/share/nginx/html