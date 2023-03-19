# Stage 1, "build-stage", based on Node.js, to build and compile Angular
FROM node:18.12.0 as build-stage
WORKDIR /app
COPY ./package*.json ./
RUN npm ci

COPY ./ ./

RUN npm run build -- --output-path=./dist/out

# Stage 2, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.23.1-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./startup.sh /startup.sh
RUN ["chmod", "+x", "/startup.sh"]

COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

CMD ["/startup.sh"]

