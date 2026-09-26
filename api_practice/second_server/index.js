const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;

    const metod = req.method;

    if (url === '/' && metod === 'GET') {
        res.end('Hello from the get method of the second server');
        res.statusCode = 200;
    }
    else if (url === '/' && metod === 'POST') {
        res.end('Hello from the post method of the second server');
        res.statusCode = 201;
    }
    else if (url === '/' && metod === 'PUT') {
        res.end('Hello from the put method of the second server');
        res.statusCode = 202;
    }
    else if (url === '/' && metod === 'DELETE') {
        res.end('Hello from the delete method of the second server');
        res.statusCode = 203;
    }
    
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }




})

server.listen(3000, () => {
    console.log('Server is running on port 3000');
})