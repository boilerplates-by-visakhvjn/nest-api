## Description

The project aims to create a standard boilerplate for backend projects that use `NodeJs`. It uses a framework named `NestJs` to ease the development process.

## Installation

### Fork the repository <br />
Feel free to raise a PR against the repository if you would like to contribute. You can take a look at the Issues tab to see what we are working on currently.

### Clone it into your local machine
```
git clone <repository-url> // Use SSH one
```

### Install the necessary packages
```
npm install
```

### Add `.env` file

The env file should contain the following details

```
DATABSE_URL=
JWT_ACCESS_TOKEN_SECRET=
JWT_ACCESS_TOKEN_EXPIRES_IN=
JWT_REFRESH_TOKEN_SECRET=
JWT_REFRESH_TOKEN_EXPIRES_IN=
```

We use `Prisma` ORM for connecting to our database and we prefer using `Postgres` for now. Feel free to make changes to `/prisma/schema.prisma` if you have any other database providers.

### Starting Up
```
npm run start:dev // for development
npm run start // for production
```

## API Collection

We like to maintain a `Postman` collection that has the basic API endpoints in it. 

https://www.postman.com/lunar-module-astronomer-25021796/workspace/boilerplates/collection/27784767-90e6e01c-f8ff-4154-83c4-40f5273ae364?action=share&creator=27784767

 
 ### Running using `Dockerfile`
 The application is available as a docker image too.

 1. Download the docker image from docker hub

    ``` 
    docker pull vjnvisakh/boilerplates-nestjs-api
    ```
 2. To application needs a `.env` file to run. You will have to create `.env` file in the root and add values as mentioned above.
 3. Once done you can use this command to start up the project
    ```
    docker run 
    -v ./.env:/app/.env 
    -p 3000:3000 
    vjnvisakh/boilerplates-nestjs-api
    ``` 

    The command basically mounts the `.env` file created by you into the application's internal `.env` file.
