let express = require('express');

let userRoutes = require('./routes/user.routes.js');

let port = process.env.PORT || 3000;

let app = express();

app.get('/', function (req, res) {
    res.send('Server is up');
})

app.use('/users', userRoutes);

app.listen(port, function() {
    console.log('Server started at http://localhost:' + port);
})