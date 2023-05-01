const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    
}, {collection: 'users'});

module.exports = mongoose.model("User", userModel);