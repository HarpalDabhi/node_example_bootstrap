const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if(req.url == "/"){

        res.statusCode = 200;
        const content = fs.readFileSync("index.html", 'utf8');
        res.end(content);

    } else  if(req.url == "/categories"){

        res.statusCode = 200;
        const content = fs.readFileSync("categories.html", 'utf8');
        res.end(content);

    } else  if(req.url == "/assesories"){

        res.statusCode = 200;
        const content = fs.readFileSync("assesories.html", 'utf8');
        res.end(content);

    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

server.listen(port,()=>{
    console.log(`listening on port : ${port}`);
})