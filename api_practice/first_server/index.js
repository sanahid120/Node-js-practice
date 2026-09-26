const http = require('http');


const server = http.createServer((req, res) => {
    const url = req.url;

    const metod = req.method;

    if (url === '/' && metod === 'GET') {
        res.end ('Hello from the home page');

    }
    else if (url === '/about' && metod === 'GET') {
        res.end('Hello from the about page');
    }

    else if (url === '/about' && metod === 'POST') {
        res.end('Hello from the about page with POST method');
    }
    else {
        res.statusCode = 404;
        res.end('Page not found');
    }





})
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})