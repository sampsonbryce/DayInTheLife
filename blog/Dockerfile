FROM nginx:latest
WORKDIR /www
COPY ./dist /www/dist/
COPY ./static /www/static/
COPY ./index.html /www
COPY ./nginx/nginx.conf /etc/nginx
EXPOSE 80
