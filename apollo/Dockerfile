FROM node:latest
LABEL maintainer="Sean Zhang"
LABEL version="1.0"

RUN apt-get update && apt-get install -y vim
RUN wget -qO- https://repo1.maven.org/maven2/org/flywaydb/flyway-commandline/6.0.8/flyway-commandline-6.0.8-linux-x64.tar.gz | tar xvz && ln -s `pwd`/flyway-6.0.8/flyway /usr/local/bin
RUN npm install -g serverless

COPY ./src /app/src
COPY ./package.json /app/package.json
COPY ./tsconfig.json /app/tsconfig.json
COPY ./webpack.config.js /app/webpack.config.js

WORKDIR /app

RUN npm install

ENTRYPOINT ["/bin/bash"]