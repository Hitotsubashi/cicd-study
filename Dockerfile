FROM node:12-alpine as build-stage
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

FROM nginx:stable-alpine as deploy-stage
COPY --from=build-stage /app/build/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
