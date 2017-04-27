# Node user management quickstart


A quickstart allowing your users to sign up for the site and be loged in.


## Depencies

1. [Node.js](https://nodejs.org/en/)


2. [Sqlite3](https://www.sqlite.org/)


3. [Bookshelf.js](http://bookshelfjs.org/)


4. [Express](http://bookshelfjs.org/)


*These dependencies are all installable from npm and should work on Windows, Linux and Mac, and are 
allready listed in the package.json.*



## Installation 


1. `git clone` the project


2. run `npm install` in a command line from the root folder to install the node depencies


3. run `npm start` from the same location to start the server


## Routes

By default the data is served via a REST API you will have acess to the following routes:

| url                               | method | description                                          |
|-----------------------------------|--------|------------------------------------------------------|
| http://localhost:3000/            | GET    | default route for server should show a static mesage |
| http://localhost:3000/users/login | POST   | route for a user to login                            |
| http://localhost:3000/new         | POST   | add a new user                                       |
| http://localhost:3000/delete      | DELETE | remove a user from site                              |
| http://localhost:3000/update      | PUT    | update a user (name, is admin etc)                   |

## Models

There is only one model in the application, the user model, since this is a seed/quickstart the user is
encouraged to change the model and add his own. 


## Database

The database is found in in the db folder, I recommend using the [Firefox sqlite manager](https://addons.mozilla.org/ro/firefox/addon/sqlite-manager/)
or the [Google Chrome SQLite Editor](https://chrome.google.com/webstore/detail/sqlite-editor-and-compile/gikfdibniklcibhonhhdbnfhkmapibid) or
[SQLiteStudio](https://sqlitestudio.pl/index.rvt).

## TODO

