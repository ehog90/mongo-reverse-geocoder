FROM node

WORKDIR /usr/src/revgeo

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8889

CMD node dist/app.js

