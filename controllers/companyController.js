const CompanyService = require('../services/companyService');

exports.GetCompanyList = (req, res) => {
    CompanyService.GetCompanyList(req,res)
    .then(user => {
        res.send(user);
    })
};

exports.GetCompanyById = (req, res) => {
    CompanyService.GetCompanyById(req,res)
    .then(user => {
        res.send(user);
    })
};


exports.CompanyCreate = (req, res) => {
    CompanyService.CompanyCreate(req,res)
    .then(user => {
        res.send(user);
    })
};

exports.CompanyUpdate = (req, res) => {
    CompanyService.CompanyUpdate(req,res)
    .then(user => {
        res.send(user);
    })
};

exports.CompanyHardDelete = (req, res) => {
    CompanyService.CompanyHardDelete(req,res)
    .then(user => {
        res.send(user);
    })
};