FROM node:latest
WORKDIR /code
COPY . /code/
# RUN chmod +x /code/setup-prod && /code/setup-prod
RUN yarn
CMD /bin/bash -c "source .config.cfg && node server.js"
