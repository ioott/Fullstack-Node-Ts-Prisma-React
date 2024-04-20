FROM node:16.14-alpine
WORKDIR /app
RUN apk add --no-cache sqlite
COPY config/. .
COPY prisma ./prisma
COPY src ./src
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
ENTRYPOINT ["sh", "-c", "npm run generate-schema && npm run dev"]
