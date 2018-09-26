FROM node:10.8.0

RUN mkdir /app

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json /app/package.json

RUN yarn install
RUN yarn add react-scripts@1.1.1 -g

CMD ["yarn", "start"]
