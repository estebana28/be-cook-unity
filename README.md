# Cook Unity Challenge

Created by Esteban Arce

## Description

This is the documentacion for the Backend side of the application programming challenge provided by CookUnity. Here you can find the full list of characteristics of the application. e.g. the tech stack, the database implementation, the deployment, caviats, etc.

## Tech Stack

This application uses [NestJS](https://nestjs.com/) framework on top of [Node.js](https://nodejs.org/). This application uses [TypeScript](https://www.typescriptlang.org/).
It uses PostgreSQL as its database implementation and uses [Prisma Client](https://www.prisma.io/docs/reference/api-reference/prisma-client-reference) to interact with the database.
Prisma is connected to [Neon](https://neon.tech) which provides a serverless database implementation. [Swagger](https://swagger.io) is implemented for API documentation.

Some of thiss technologies where provided by the challenge itself and others where selected for a fast and simple development and configuration.

## Deployment

This backend application is deployed on [Vercel](https://vercel.com/). So the frontend connect directly to it without the need to run locally.
The URL for this repository is [https://be-cook-unity.vercel.app](https://be-cook-unity.vercel.app).

## Installation

```bash
yarn install
```

## Running the app

For Development Mode:

```bash
yarn start:dev
```

For Production Mode:

```bash
yarn build
yarn start
```

For Testing

```bash
yarn test
```

For API Documentation. You should run the development mode and access to it.

```bash
yarn start:dev
```

And then go to the url [API Documentation](https://localhost:3001/docs)

## Caviats

Some of the technologies used in this project are new to me, and this is my first time implementing them.
There are certain parts of the challenge that I was unable to complete do to time constraints.

I've created a json with mocked data for fast access of the pokemons on the database for testing purposes.

Becouse I've used Nest.js the structure of the code follows the opininated approach. Also Prisma default structure.

## Nice to have

- Add testing, auth, protection, pagination, filter and more.
- Better documentation
