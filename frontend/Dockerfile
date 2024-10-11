# Use the official Node.js 18 image as the base image
FROM node:18.18.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the Next.js project
RUN npm run build

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Define environment variable
# ENV NODE_ENV production

# Start the Next.js app
CMD ["npm", "start"]