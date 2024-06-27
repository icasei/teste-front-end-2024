FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx tsc
RUN npm install -g http-server
EXPOSE 8081
CMD ["http-server", "-p", "8081"]
