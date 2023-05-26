FROM --platform=amd64 node:18

WORKDIR /app

COPY package.json .

RUN npm i

COPY . ./

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start" ]