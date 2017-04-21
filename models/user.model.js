let bookshelf = require('../db/bookshelf.js');

// DB stuff
let USER =  bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: false,
    softDelete: true
});

module.exports = USER;