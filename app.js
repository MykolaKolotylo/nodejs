const http = require('http');
const DEFAULT_PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(req);
});

server.listen(DEFAULT_PORT);
