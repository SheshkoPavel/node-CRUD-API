# Simple CRUD API

## Installation

1. Open terminal and go to directory where you want to put code
2. Use next command to download code from repository

```
https://github.com/SheshkoPavel/node-CRUD-API.git
```
3. Go to directory with code in terminal
4. Use command to install node modules
```
npm i
```

## Configuration

Server port for listening incomings requests can be configured in .env file **(you must create it, or change .env.example)**

Available scripts:
1. Run application in development mode
```
npm run start:dev
```
2. Run application in production mode (and build it, using webpack)
```
npm run start:prod
```
3. Build application
```
npm run build
```

**Implemented endpoint** `api/users`
 - GET `api/users`
    ```
    Server should answer with status code 200 and all users records
    ```
- GET `api/users/{userId}`
    ```
    Server should answer with status code 200 and record with id === userId if it exists
    Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
    ```
- POST `api/users`
    ```
    Server should answer with status code 201 and newly created record
    Server should answer with status code 400 and corresponding message if request body does not contain required fields
    ```
- PUT `api/users/{userId}`
    ```
    Server should answer with status code 200 and updated record
    Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
    ```
- DELETE `api/users/{userId}` is used to delete existing user from database
    ```
    Server should answer with status code 204 if the record is found and deleted
    Server should answer with status code 400 and corresponding message if userId is invalid (not uuid)
    Server should answer with status code 404 and corresponding message if record with id === userId doesn't exist
    ```
