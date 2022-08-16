FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT 8080
ENV HOST 0.0.0.0

EXPOSE 8080

RUN npm run prerender

CMD ["npm", "run", "serve:ssr"]