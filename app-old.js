const http = require('http');

const hostname = '127.0.0.1';
const port = 3100;

const server = http.createServer((req, res) => {
    // const url = req.url;
    const { url } = req; // destructuring the obj; same as line 7 but destructured
    console.log(`The URL is: ${url}`);
    if (url === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World! Welcome to my Node App!');
    } else if (url === '/favicon.ico') {
        res.statusCode = 200;
        res.end("");
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end("This is not the homepage");
    }
});

server.listen(port, hostname, () => {
    console.log(`YO HIVE! Beyonce is COMING at http://${hostname}:${port}`);
});
