let express = require('express');
let router = express.Router();

let bodyParser = require('body-parser');
// create application/json parser
let jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

let userAPI = require('../api/user.api.js');

router.post('/login', urlencodedParser, userAPI.login);
router.post('/new', urlencodedParser, userAPI.addNew);

module.exports = router;