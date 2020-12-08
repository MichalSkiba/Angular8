FROM node:latest as node
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest as prod-stage
COPY --from=node /app/dist/Angular8RouterBook /usr/share/nginx/html
EXPOSE 80
