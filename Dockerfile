# Use the official Node.js image from the Docker Hub
FROM node:20

# Create and set the working directory
WORKDIR /app

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["node", "index.js"]
