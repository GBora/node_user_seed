let express = require('express');

let userRoutes = require('./routes/user.routes.js');

let app = express();

app.get('/', function (req, res) {
    res.send('Server is up');
})

app.use('/users', userRoutes);

app.listen(3000, function() {
    console.log('server started');
})