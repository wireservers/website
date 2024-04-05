FROM node:latest AS wireservers-build
WORKDIR /app
COPY . .
RUN npm install
RUN export NODE_OPTIONS=--openssl-legacy-provider && npm run build --prod

FROM nginx:alpine
COPY --from=wireservers-build /app/dist/wireservers /usr/share/nginx/html
EXPOSE 80