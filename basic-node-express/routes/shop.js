const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    console.log('main');
    res.send('<h1>Hello from Next Express!</h1>');
});

module.exports = router;
