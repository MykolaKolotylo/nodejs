const http = require('http');
const routes = require('./routes');

const DEFAULT_PORT = 3000;

const server = http.createServer(routes);

server.listen(DEFAULT_PORT);
