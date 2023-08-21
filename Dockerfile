# Use the official Node.js image as our base image
FROM node:latest

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies in the container
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Specify that the container should listen on port 3000 at runtime
EXPOSE 3000

# Define the command to run the application
CMD [ "node", "index.js" ]
