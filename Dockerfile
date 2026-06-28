# Stage 1: Build source code React thành file tĩnh
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Dùng Nginx để serve các file tĩnh đó
FROM nginx:alpine
# Copy sản phẩm đã build từ Stage 1 vào thư mục mặc định của Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Mở port 80 của Nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]