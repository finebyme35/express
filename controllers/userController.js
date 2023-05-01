const UserService = require('../services/userService');

exports.login = (req, res) => {
    UserService.Login(req,res)
    .then(user => {
        res.send(user);
    })
};

exports.signup = (req, res) => {
    UserService.SignUp(req, res);
};