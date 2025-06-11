FROM node:20-alpine as builder
WORKDIR /app
COPY client/ ./client
WORKDIR /app/client
RUN npm install
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g http-server
COPY --from=builder /app/client/dist ./dist
EXPOSE 8080
CMD ["http-server", "dist", "-p", "8080", "--proxy", "http://localhost:8080?"]
