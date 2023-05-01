module.exports = (app) => {
    const company = require('../controllers/companyController');

    app.post('/company/CompanyCreate', company.CompanyCreate);
    app.post('/company/getCompanyList', company.GetCompanyList);
    app.post('/company/getById', company.GetCompanyById);

    app.post('/company/update', company.CompanyUpdate);
    app.post('/company/delete', company.CompanyHardDelete);

}