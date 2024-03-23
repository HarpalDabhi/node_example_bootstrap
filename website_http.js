const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');

   if(req.url == "/"){

    res.statusCode = 200;
    res.end("<h1>Welcome to Home.</h1>");

   }else if(req.url == "/about"){

    res.statusCode = 200;
    res.end("<h1> About Website</h1>");

   } else if(req.url == "/contact"){

    res.statusCode = 200;
    res.end("<h1>Contact Website : hdabhi902@rku.ac.in</h1>");

   }else if(req.url == "/content"){
    res.statusCode = 200;
    const content = fs.readFileSync("content.html", 'utf8');
    res.end(content);

   } else{
    
    res.statusCode = 404;
    res.end("<h1>Page Not Found</h1>");

   }

});

server.listen(port,()=>{
    console.log(`Server listen : ${port}`);
})