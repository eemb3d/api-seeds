# Technical Overview

Retrieve data about SOME_ENDPOINTS_COLLECTIONS.

- Node.js
- REST APIs
- MongoDB (with mongoose ODM)
- Docker

### Monolitic Architecture

- No UI

- BackEnd NodeJS

  - REST API GATEWAY

  - Service 1: Retrieve single game info by Resource_ID

  - Service 2: Retrieve summary of the SOME_ENDPOINTS_COLLECTIONS.

- MongoDB

## Setup

```sh
# Download the project
git clone https://github.com/eemb3d/TBD.git .

# Modify .env
npm run cpenv

# Install dependencies
npm install

# Seed the DB
# check if db up 'systemctl status mongod'
npm run seed:db

# To start
npm start

# In another directory
npm run test

```
