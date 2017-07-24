FROM node:latest
WORKDIR /code
COPY . /code/
RUN yarn
CMD /bin/bash -c "source .config.cfg && node server.js"
