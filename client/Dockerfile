
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 5173
ENV VITE_API_BASE=http://localhost:4001/api
CMD ["npm","run","dev"]
