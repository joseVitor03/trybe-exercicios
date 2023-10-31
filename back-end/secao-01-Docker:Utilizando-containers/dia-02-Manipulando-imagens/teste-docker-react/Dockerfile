FROM node:18-alpine

WORKDIR /app-docker

COPY package*.json ./

RUN npm clean-install

COPY . ./

CMD [ "npm", "run", "dev" ]

COPY /src .
