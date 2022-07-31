const http = require('http');
const DEFAULT_PORT = 3000;

const server = http.createServer((req, res) => {
    console.log(`url: ${req.url}; method: ${req.method}; headers :${req.headers}; `);

    res.setHeader('Content-Type', 'text/html');
    res.write('<html lang="us">');
    res.write('<body><title>My First Page</title></body>');
    res.write('<body><h1>Hello from the server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(DEFAULT_PORT);
