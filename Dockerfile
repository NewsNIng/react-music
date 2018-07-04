FROM node:8.9.0

RUN \
apt-get update && \
apt-get install -y nginx

WORKDIR /app
COPY . /app/
EXPOSE 443

RUN \
npm install && \
npm run build && \
cp -r dist/* /var/www/html && \
rm -rf /app

CMD ["nginx","-g","daemon off;"]
