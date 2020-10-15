# incoGNITO v0.0.4

## Getting Started
### Database Configuration
incoGNITO can use either [Mongo Atlas](https://cloud.mongodb.com) _(default)_ or a local instance of MongoDB using the **db** container provided in the [docker-compose.yaml](docker-compose.yaml) file. 

#### Mongo Atlas setup
Do nothing, Mongo Atlas is configured by default. Skip to [Running the App](#running-the-app) section

#### Local instance setup
Create a file named .env in the /server/api directory and copy/paste these lines
```
DB_ADDRESS=db:27017
DB_PROTOCOL=mongodb
DB_NAME=dev
DB_USERNAME=dev
DB_PASSWORD=dev
```

Then create a .env file in the /server/db directory and paste these lines
```
MONGO_INITDB_ROOT_USERNAME=root
MONGO_INITDB_ROOT_PASSWORD=root
```

### [Running the App](#running-the-app)
incoGNITO can be ran using [Node](https://nodejs.org/en/) or [Docker](https://www.docker.com/get-started) by running the commands in the section below.

#### To run using Node

First start the API by running these commands.
```
cd server/api
```
```
npm install 
```
```
npm run start
```

Then, in a new terminal, start the Client by running these commands.
```
cd client/app
```
```
npm install 
```
```
npm run seve
```

#### To run using Docker
From the root directory run these commands.
```
docker-compose build
```
```
docker-compose up
```