FROM node:16.14-alpine
WORKDIR /app
EXPOSE 3001
RUN apk add --no-cache sqlite
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run generate-schema
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]