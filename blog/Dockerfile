FROM nginx:latest
WORKDIR /www
COPY ./dist /www/dist/
COPY ./static /www/static/
COPY ./index.html /www
COPY ./nginx/nginx.conf /etc/nginx
COPY ./nginx/certs/ssl-bundle.crt /etc/ssl/
COPY ./nginx/certs/dayinthelife.key /etc/ssl/
EXPOSE 80
EXPOSE 443
