const mongoose = require('mongoose');
const moment = require('moment');

const companyModel = mongoose.Schema({
    name: {
        type: String
    },
    legalNumber: {
        type: String
    },
    incorporationCountry:{
        type: String
    },
    website: {
        type: String
    },
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    isDeleted: {
        type: Boolean
    }
    
    
}, {collection: 'companies'});

module.exports = mongoose.model("Company", companyModel);