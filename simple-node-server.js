const http = require('http');
const fs = require("fs");
const DEFAULT_PORT = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    // to read more about headers visit https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
    res.setHeader('Content-Type', 'text/html');

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    res.write('<html lang="us">');
    res.write('<body><title>My First Page</title></body>');
    res.write('<body><h1>Hello from the server</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(DEFAULT_PORT);
