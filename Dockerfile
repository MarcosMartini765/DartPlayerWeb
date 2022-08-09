FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 8080
ENV HOST 0.0.0.0

RUN npm run prerender && node_modules/.bin/ng run dartplayer-web:server

CMD ["npm", "run", "serve:ssr"]