FROM node:14.2.0-alpine3.10

RUN mkdir -p /src/app

WORKDIR /src/app

COPY ./image-gallery /src/app

RUN yarn install

EXPOSE 3001

CMD ["cmd", "start"]