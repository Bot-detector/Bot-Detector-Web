FROM nginx:alpine

COPY deploy/nginx/docker-nginx.conf /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html