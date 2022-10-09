FROM node:16-alpine3.13

WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .

RUN chown -R node /app/node_modules
USER node

CMD ["npm", "run", "start:dev", "--host", "0.0.0.0"]