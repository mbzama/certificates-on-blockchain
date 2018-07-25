FROM node:latest

COPY . .

RUN npm install -g

RUN npm run build

EXPOSE 9000

CMD [ "npm", "start" ]
