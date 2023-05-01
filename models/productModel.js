const mongoose = require('mongoose');

const productModel = mongoose.Schema({
    name: {
        type: String
    },
    category: {
        type: String
    },
    amount:{
        type: Number
    },
    amountUnit: {
        type: Number
    },
    company: {type: mongoose.Schema.Types.ObjectId, ref: 'Company'},
    isDeleted: {
        type: Boolean
    }
    
}, {collection: 'products'});

module.exports = mongoose.model("Product", productModel);