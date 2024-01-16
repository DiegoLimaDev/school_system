FROM node:18-alpine

WORKDIR /user/src/app_nest

EXPOSE 8000

COPY package.json package-lock.json ./

COPY ./.env.production ./.env

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
