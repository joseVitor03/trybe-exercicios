FROM node:18

WORKDIR /app

COPY package*.json .

RUN npm clean-install

COPY . .

CMD [ "node", "src/server.js" ]

EXPOSE 3000