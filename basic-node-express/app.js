const express = require('express');
const app = express();

app.use('/about', (req, res, next) => {
    console.log('in the about');
    res.send('<h1>Hello from About</h1>');
});

app.use('/', (req, res, next) => {
    console.log('in the another middleware v3!');
    res.send('<h1>Hello from Next Express!</h1>');
});

app.listen(3000);
