# Extend from node official image:
FROM node:10.8

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY ./ ./
COPY package*.json ./

# Expose correct port
EXPOSE 5000

RUN npm install --only=production
CMD [ "npm", "run", "prod" ]
