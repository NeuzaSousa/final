# base image
FROM node:14.20

# set working directory
#RUN mkdir /proch/git/project/angular
WORKDIR C:/Users/proch/git/final/frontend

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH proch/git/final/frontend/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json proch/git/final/frontend/package.json
RUN npm install

# add app
COPY . proch/git/final/frontend

EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0 --port 4200