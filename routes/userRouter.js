module.exports = (app) => {
    const user = require('../controllers/userController');

    app.post('/login', user.login);

    app.post('/signup', user.signup);

}