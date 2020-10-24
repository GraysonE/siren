# develop stage
FROM node:13.14-alpine as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm -g i @quasar/cli
COPY . .

# build stage
FROM develop-stage as build-stage
RUN npm i
RUN quasar build

# production stage
FROM nginx:1.17.5-alpine as production-stage
COPY --from=build-stage /app/dist/pwa /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
