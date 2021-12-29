FROM nginx:1.15.0-alpine

WORKDIR /app

RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN mkdir /var/www/html -p