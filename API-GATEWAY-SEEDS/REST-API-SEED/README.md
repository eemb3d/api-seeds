# Technical Overview

Retrieve data about SOME_ENDPOINTS_COLLECTIONS.

- Node.js
- REST APIs
- MongoDB (with mongoose ODM)
- Docker (and Docker Compose)
- Microservices

### Microservices

- No UI

- BackEnds NodeJS

  - REST API GATEWAY

  - Service 1: Retrieve info RESOURCE_COLLECTION by Resource_ID

  - Service 2: Retrieve SUMMURY of the SOME_ENDPOINTS_COLLECTIONS.

- MongoDB

## Setup

```sh
# Download the project
git clone https://github.com/eemb3d/api-seeds.git api-seeds && cd api-seeds/API-GATEWAY-SEEDS/REST-API-SEED

# Modify .env
npm run cpenv

# Install dependencies
npm run installall

# Start the Microservices
npm run start

# In another directory
npm run test

```
