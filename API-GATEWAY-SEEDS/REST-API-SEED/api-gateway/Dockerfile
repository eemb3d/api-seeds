FROM node:12

COPY . /opt/app

WORKDIR /opt/app/api-gateway

RUN npm ci --only=production

# RUN npm run seed:db

EXPOSE ${PORT}

CMD [ "npm", "start" ]
