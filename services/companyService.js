const Company = require('../models/companyModel');
const moment = require('moment')

const CompanyService = {
    GetCompanyList: async (req, res) => {
        try{
            await Company.find().exec().then(data => {
            
                  return res.status(200).json({success: true, data:data});
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    GetCompanyById: async (req, res) => {
        const {id} = req.body
        try{
            await Company.findOne({_id: id}).then(data => {
                  return res.status(200).json({success: true, data:data});
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    CompanyCreate: async (req, res) => {
        try{
            const newCompany = new Company({...req.body});
            await Company.create(newCompany).then(data => {
                return res.status(201).json({success: true, data: data});

            })
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    CompanyUpdate: async (req, res) => {
        const {_id, name, legalNumber, incorporationCountry, website} = req.body
        try{
            
            await Company.findOneAndUpdate({_id: _id}, {...req.body, isDeleted: false}).then(data => {
                 if(data){
                    return res.status(200).json({success: true, data:data});
                 }
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    CompanyHardDelete: async (req, res) => {
        const {id} = req.body
        try{
            await Company.deleteOne({_id: id}).then(data => {
                return res.status(200).json({success: true, data:data});
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    
}

module.exports = CompanyService;