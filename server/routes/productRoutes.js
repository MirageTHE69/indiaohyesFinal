const
    router = require('express').Router(),
    productController = require('../controllers/productController');

router
    .route('/')
    .get(productController.getAllProducts)
    .post(productController.createProduct);

router
    .route('/:id')
    .get(productController.getProduct)
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct);

module.exports = router;