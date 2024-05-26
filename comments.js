// Create a web server
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url) {
        const comments = [
            { "author": "Anne Droid", "comment": "I wanna know what love is..." },
            { "author": "Billy Idol", "comment": "Eyes without a face..." },
            { "author": "Cal Jammer", "comment": "Chillin' like a villain..." }
        ];
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ comments }));
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});