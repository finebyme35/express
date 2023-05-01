module.exports = (app) => {
    const product = require('../controllers/productController');

    app.post('/product/create', product.ProductCreate);
    app.post('/product/getList', product.GetProductList);
    app.post('/product/getById', product.GetProductById);

    app.post('/product/update', product.ProductUpdate);
    app.post('/product/delete', product.ProductHardDelete);

}