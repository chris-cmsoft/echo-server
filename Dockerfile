FROM node:14-alpine3.10

COPY . .

RUN yarn install

CMD ["npm", "start"]