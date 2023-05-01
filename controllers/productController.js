const ProductService = require('../services/productService');

exports.GetProductList = (req, res) => {
    ProductService.GetProductList(req,res)
    .then(user => {
        res.send(user);
    })
};

exports.GetProductById = (req, res) => {
    ProductService.GetProductById(req,res)
    .then(user => {
        res.send(user);
    })
};


exports.ProductCreate = (req, res) => {
    ProductService.ProductCreate(req,res)
    .then(user => {
        res.send(user);
    })
};

exports.ProductUpdate = (req, res) => {
    ProductService.ProductUpdate(req,res)
    .then(user => {
        res.send(user);
    })
};

exports.ProductHardDelete = (req, res) => {
    ProductService.ProductHardDelete(req,res)
    .then(user => {
        res.send(user);
    })
};