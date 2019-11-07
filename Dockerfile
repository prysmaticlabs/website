# docker build -t gcr.io/prysmaticlabs/website:latest .
FROM node:11-alpine as builder

RUN apk update && apk upgrade && \
    apk add --no-cache git python make g++

COPY package.json package-lock.json ./

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build
RUN npm i -g npm@6.4
RUN npm ci
RUN mkdir /ng-app && mv ./node_modules ./ng-app/

## Move to /ng-app (eq: cd /ng-app)
WORKDIR /ng-app

# Copy everything from host to /ng-app in the container
COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build

# Copy only the dist dir.
FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist/prysmaticlabs /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
