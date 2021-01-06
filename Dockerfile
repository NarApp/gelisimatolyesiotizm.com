FROM node:12.18.3

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

CMD ["yarn", "start"]