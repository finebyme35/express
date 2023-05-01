const Product = require('../models/productModel');
const moment = require('moment')
const Company = require('../models/companyModel');
const ProductService = {
    GetProductList: async (req,res) => {
        try{
            await Product.find().then(data => {
                  return res.status(200).json({success: true, data:data});
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    GetProductById: async (req, res) => {
        const {id} = req.body
        try{
            await Product.findOne({_id: id}).exec().then(data => {
                  return res.status(200).json({success: true, data:data});
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    ProductCreate: async (req, res) => {
        try{
               const  newProduct = new Product({...req.body, isDeleted: false, company: req.body.companyId});
            
               await Product.create(newProduct).then(data => {
                    return res.status(201).json({success: true, data:data});
                
                });
            
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    ProductUpdate: async (req, res) => {
        
        try{
            await Product.findOneAndUpdate({_id: req.body._id}, {...req.body, isDeleted: false, company: req.body.company._id}).exec().then(data => {
                  return res.status(200).json({success: true, data:data});
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    ProductHardDelete: async (req, res) => {
        const {id} = req.body
        try{
            await Product.deleteOne({_id: id}).then(data => {
                return res.status(200).json({success: true, data:data});
            });
            
        }catch{
            const error = new Error("Error! Something went wrong.");
            throw error;
        }
    },
    
}

module.exports = ProductService;