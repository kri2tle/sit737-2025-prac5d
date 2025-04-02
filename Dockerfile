# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose port 3040
EXPOSE 3040

# Command to start the application
CMD ["npm", "start"]

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
CMD curl --fail http://localhost:3040 || exit 1

