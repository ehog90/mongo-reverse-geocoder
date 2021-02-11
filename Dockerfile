FROM node:15.8.0-alpine3.10

WORKDIR /usr/src/revgeo

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8889

CMD node dist/app.js

