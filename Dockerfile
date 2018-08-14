# Extend from node official image:
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

# Expose correct port
EXPOSE 5000

CMD [ "node", "index" ]