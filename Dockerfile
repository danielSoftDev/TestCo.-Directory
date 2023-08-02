# Step 1: Build the React app
FROM node:18.12.0 as build

# Set the working directory inside the container
WORKDIR /testco.-directory

# Copy the package.json and package-lock.json files to the container
COPY package.json package-lock.json ./

# Install app dependencies
RUN npm install

# Copy the entire React app to the container
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM 1.24.0:latest

# Copy the built React app from the previous stage to the Nginx server directory
COPY --from=build /testco.-directory/build /usr/share/nginx/html

# Remove the default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy our custom Nginx configuration to the container
COPY nginx.conf /etc/nginx/conf.d

# Expose port 80 (the default port for Nginx)
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
