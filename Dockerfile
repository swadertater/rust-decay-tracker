# Step 1: Use Node.js as a base image
FROM node:14 AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install Angular CLI and dependencies
RUN npm install -g @angular/cli && npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Build the Angular application
RUN ng build --configuration production

# Step 7: Use Nginx to serve the application
FROM nginx:1.23.3

# Step 8: Copy the build output to Nginx's default directory
COPY --from=build /app/dist/rust-decay-tracker /usr/share/nginx/html

# Step 9: Expose the default Nginx port
EXPOSE 80

# Step 10: Start Nginx
CMD ["nginx", "-g", "daemon off;"]