FROM node:18-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npm run build

EXPOSE 3000

CMD ["/app/scripts/bootstrap.sh"]