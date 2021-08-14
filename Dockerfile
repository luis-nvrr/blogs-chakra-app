FROM node:lts-alpine

LABEL version="1.0"
LABEL description="Base docker image for the BlogsApp frontend react app"
LABEL mantainer="luisfnvrr@gmail.com"

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY ["package.json", "yarn.lock" ,"./"]

RUN npm install yarn
RUN yarn install 

COPY . ./

EXPOSE 3000

CMD ["yarn", "dev"]




