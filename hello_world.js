const https = require('node:http');

const hostname = '127.0.0.1';
const port = 3001

const server = https.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, World! \n")
});

server.listen(port, hostname, () => {
    console.log(`Server runnign at http://${hostname}:${port}/`);
})