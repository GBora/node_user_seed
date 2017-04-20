let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './users.sqlite'
    }
})

let bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;