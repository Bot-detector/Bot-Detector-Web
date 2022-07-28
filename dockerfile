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
COPY deploy/dev/docker-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

# production image
FROM base as nginx-prod
COPY deploy/prod/docker-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html