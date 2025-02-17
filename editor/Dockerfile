# Build a docker image for this repository
# 1. make sure docker is installed
# 2. make sure you have a clean copy of this repository
# 3. go to the directory where this file exists (the root of your repo)
# 4. $ docker build -t webgme-org --build-arg webgme_repo=webgme@latest .
# 5. export image: $ docker save -o webgme-org.tar webgme-org

# After successful startup, you should be able to connect to your dockerized webgme on the 8888 port of the host.
#
# Useful commands
# checking the status of your docker containers:    docker ps -a
# restart your docker container:                    docker restart webgme-seaml
# stop your container:                              docker stop webgme-seaml
# removing your container:                          docker rm webgme-seaml
# removing your image:                              docker rmi webgme-seaml
# list available images:                            docker images
# exporting the image:                              docker save -o webgme-seaml.tar webgme-seaml
# import an image:                                  docker load -i webgme-seaml.tar


# Node 20
FROM node:iron

LABEL maintainer="Patrik Meijer <patrik.meijer@vanderbilt.edu>"
ARG webgme_repo=webgme@latest


RUN mkdir /usr/app

WORKDIR /usr/app

# copy app source
ADD . /usr/app/

# Install webgme
RUN npm install ${webgme_repo}

# Install node-modules
RUN npm install

CMD ["npm", "start"]
