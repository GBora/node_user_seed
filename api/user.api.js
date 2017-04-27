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
    .catch( function (err) {
        console.log(err);
        res.sendStatus(500);
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
        .catch( function (err) {
            console.log(err);
            res.sendStatus(500);
        })
    }
}

let deleteUser = function (req, res) {
    let id = req.body.id;

    if (id === undefined) {
        res.sendStatus(400);
    } else {
        USER.forge({ id: id }).destroy().then( function () {
            res.sendStatus(200);
        })
        .catch( function (err) {
            console.log(err);
            res.sendStatus(500);
        })
    }
}

let updateUser = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    let is_admin = req.body.is_admin;
    let id = req.body.id;

    if (!username || !password || !email || is_admin === undefined || id === undefined) {
        res.sendStatus(400);
    } else {
        new USER({
            username: username,
            password: password,
            email: email,
            is_admin: is_admin,
            id: id
        }).save().then(function () {
            res.sendStatus(200);
        })
        .catch( function (err) {
            console.log(err);
            res.sendStatus(500);
        })
    }
}

let userAPI = {
    login: login,
    addNew: addNew,
    deleteUser: deleteUser,
    updateUser: updateUser
}

module.exports = userAPI;