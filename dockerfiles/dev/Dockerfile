FROM node:6.10.3

# we need this to install via https
RUN apt-get update && apt-get install -y apt-transport-https

# update the local sources list of deb packages and then install yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update && apt-get install -y yarn=0.21.3-1

WORKDIR /usr/src/web
