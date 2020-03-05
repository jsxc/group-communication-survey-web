# Create a layer from the Node Alpine Docker image
FROM node:10.15.3-alpine

# Create the app directory inside the Docker image
RUN mkdir -p /usr/src/group-communication-survey-web
WORKDIR /usr/src/group-communication-survey-web

# Copy package.json & yarn.lock into the root of the directory created above
COPY package.json yarn.lock ./

# Install app dependencies
RUN yarn install --no-cache --frozen-lockfile

# Bundle app source inside Docker image
COPY . .

# Expose port
EXPOSE 5000

# Build & serve app
CMD yarn build && yarn serve
