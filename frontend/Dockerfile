FROM node:18-alpine

WORKDIR /user/src/vite_app

EXPOSE 5173

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
