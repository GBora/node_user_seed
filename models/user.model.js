let bookshelf = require('../db/bookshelf.js');

// DB stuff
let USER =  bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: false
});

module.exports = USER;