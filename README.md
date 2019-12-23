# NodeJS + Express Server with REST API | [BETA - v1.3.10]
!Important:
"You may see database specified error also - it'll turned off when it's goes for public launch."

An easy way to get started with a Express server offering a REST API with Node.js.

## Features

* Babel 7
* Environment Variables
* Express
* REST API

## Requirements

* [node & npm](https://nodejs.org/en/)
* [git](#)

## Installation

* Clone this repository.
* `cd rest-api`
* `npm install`
* `npm start`
* Change port in .env file if you need.

### GET Routes

* visit http://localhost:3000
  * /api/v1/users (For all users)
  * /api/v1/users/{user-id} (For single user)

### POST Routes

* visit http://localhost:3000
  * /api/v1 (Granting access to user for using APIs endpoints)


### PUT Routes

* visit http://localhost:3000
  * /api/v1/users/{user-id} (Updating user detail)

### DELETE Routes

* visit http://localhost:3000
  * /api/v1/users/{user-id} (Deleting particular user - hard delete)


### Beyond GET Routes

#### CURL

* Get all of the users with:
  * `curl -X GET -H "Content-Type:application/json" http://localhost:3000/users -d`
* Get a single user with:
  * `curl -X GET -H "Content-Type:application/json" http://localhost:3000/users/1`
* Delete a user with:
  * `curl -X DELETE -H "Content-Type:application/json" http://localhost:3000/users/1`


#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Get all of the users with:
  * URL: http://localhost:3000/users
  * Method: GET
  * Body: raw + JSON (application/json)  
* Delete a user with:
  * URL: http://localhost:3000/users/1
  * Method: DELETE
* GET a single user with:
  * URL: http://localhost:3000/users/1
  * Method: GET


### Status & Results - When you hit the endpoint:
* LOGIN response:
`{
    "id": 1,
    "username": "admin",
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTc3MDkxOTQzLCJleHAiOjE1NzcwOTU1NDN9.xOPd4WqAT_AqtG5yyBaI8KQrjifnpQN0FIB1Otj7st0"
}`

* UPDATE records result - (While using any update endpoints):
`{
    "status": true,
    "code": 200,
    "message": "success",
    "data": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 0,
        "info": "Rows matched: 1  Changed: 1  Warnings: 0",
        "serverStatus": 2,
        "warningStatus": 0,
        "changedRows": 1
    }
}`

* DELETE response:
`{
    "status": true,
    "code": 200,
    "message": "success",
    "data": {
        "fieldCount": 0,
        "affectedRows": 0,
        "insertId": 0,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
    }
}`