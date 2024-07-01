FROM node:20

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]