FROM node:7.1.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

ARG NPM_TOKEN
RUN echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc

ENV PORT 80
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app

EXPOSE 80
CMD [ "npm", "start" ]
