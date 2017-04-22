# Node user management quickstart


A quickstart allowing your users to sign up for the site and be loged in.


## Depencies

1. [Node.js](https://nodejs.org/en/)


2. Sqlite3


3. Bookshelf.js


4. Express


*These dependencies are all installable from npm and should work on Windows, Linux and Mac.*



## Installation 


1. `git clone` the project


2. run `npm install` in a command line from the root folder to install the node depencies


3. run `npm start` from the same location to start the server


## Routes

By default you will have acess to the following routes:

| url | description |
|-----|:-----------:|
|http://localhost:3000/ | default route for server should show a static mesage|
|http://localhost:3000/users/login|route for a user to login via POST call|
|http://localhost:3000/new| add a new user via POST call|
|http://localhost:3000/delete| remove a user from site via DELETE call |
|http://localhost:3000/update| update a user (name, is admin etc) via a PUT call|