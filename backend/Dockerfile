FROM node:latest

WORKDIR /user/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

CMD ["npm", "run", "start:prod"]
