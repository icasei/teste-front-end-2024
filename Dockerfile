# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the project files
COPY . .

# Install the HTTP server
RUN npm install -g http-server

# Build the project (if needed)
# RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Start the server
CMD ["http-server", "-p", "8080"]
