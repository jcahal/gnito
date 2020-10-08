FROM node:lts
RUN npm install -g @vue/cli
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080