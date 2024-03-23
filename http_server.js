const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((request,response)=>{

    response.statusCode = 200;

    response.setHeader('Content-Type','text/html');

    response.end("<h1>Welcome to the Node Server</h1><h4>Thanks for Visit Website</h4>");
    
    console.log(request);

});

server.listen(port,()=>{
    console.log(`Server listening on ${port}`);
})