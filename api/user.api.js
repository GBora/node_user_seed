let USER = require('../models/user.model.js');

let login = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (!username || !password) {
        res.sendStatus(400);
    }

    USER.where('username', username).fetch().then( function (user) {
        if (user) {
            if (user.attributes.password == password) {
                res.sendStatus(200);
            } else {
                res.sendStatus(401);
            }
        } else {
            res.sendStatus(401);
        }
    })
}

let addNew = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let is_admin = req.body.is_admin;

    if (!username || !password || !email || is_admin === undefined) {
        res.sendStatus(400);
    } else {
        USER.fetchAll().then( function (users) {
            new USER({
                username: username,
                password: password,
                email: email,
                is_admin: is_admin,
                id: users.length + 1
            }).save(null, {method: 'insert'}).then(function () {
                res.sendStatus(200);
            })
        })
    }
}

let userAPI = {
    login: login,
    addNew: addNew
}

module.exports = userAPI;