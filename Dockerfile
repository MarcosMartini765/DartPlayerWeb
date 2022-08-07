FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install
# Copy local angular/nest code to the container
COPY . .
# Build production app

ENV PORT 8080
ENV HOST 0.0.0.0

RUN node_modules/.bin/ng build --localize && node_modules/.bin/ng run dartplayer-web:server

CMD ["npm", "run", "serve:ssr"]