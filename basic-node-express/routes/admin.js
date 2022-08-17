const express = require('express');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log('add-product');
    res.send('<form action="/admin/product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>');
});

router.post('/product', (req, res, next) => {
    console.log('product', req.body);
    res.redirect('/');
});

module.exports = router;
