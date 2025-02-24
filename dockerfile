# syntax=docker/dockerfile:1
FROM node:22

# copy files
COPY package.json /app/
COPY src /app/
COPY . /app/

# set working directory
WORKDIR /app

# run npm dependencies
RUN npm install

# run app
CMD ["npm", "run", "dev"]