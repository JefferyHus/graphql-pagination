FROM node:12-alpine
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn --pure-lockfile
COPY . .
CMD [ "node", "server.js" ]
EXPOSE 4000