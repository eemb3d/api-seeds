# Technical Overview

Retrieve data from SOME_ENDPOINTS_COLLECTIONS.

- Node.js
- GraphQL APIs
- MongoDB (with mongoose ODM)
- Docker (and Docker Compose)
- Microservices

### Microservices

- No UI

- BackEnds NodeJS

  - GraphQL APIs GATEWAY

  - Service 1: Retrieve info RESOURCE_COLLECTION by Resource_ID

  - Service 2: Retrieve SUMMURY of the SOME_ENDPOINTS_COLLECTIONS.

- MongoDB

## Setup

```sh
# Download the project
git clone https://github.com/eemb3d/TBD.git .

# Modify .env
npm run cpenv

# Install dependencies
npm run installall

# Start the Microservices
npm run start

# In another directory
npm run test

```
