let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './db/users.sqlite'
    }
})

let bookshelf = require('bookshelf')(knex);

bookshelf.plugin(require('bookshelf-paranoia'));

module.exports = bookshelf;