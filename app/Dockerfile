FROM node:18-alpine

WORKDIR /app

RUN apk update \
    && apk add --no-cache ca-certificates wget openssl \
    && update-ca-certificates

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY . .

RUN npm install --only=production 
RUN npm prune --production

EXPOSE 3000
