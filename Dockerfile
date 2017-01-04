FROM node:7.0.0

WORKDIR /code

COPY package.json /code/package.json
RUN npm install --production
RUN mv /code/node_modules /node_modules

COPY ./dist/ /code/dist
COPY ./server.js /code

CMD ["npm", "start"]
