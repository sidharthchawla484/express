
const http= require('http');
const fs = require('fs');
const port = process.env.Port || 7000;

const server = http.createServer((req , res)=>{
    console.log(req.url)
    if(req.url == '/home'){
        res.statusCode=200;
        res.end('<h1>node js first time with / </h1> <p> this is frist project on node js from sidhath</p>');
    }
    else if(req.url == '/index'){
        res.statusCode=200;
        res.end('<h1> index page </h1>');
    }
    else if(req.url == '/hello'){
        res.statusCode=200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else{
       // res.harry();
        res.statusCode=404;
        res.end('page not fount on server');
    }

    res.statusCode = 200;
    res.setHeader = ('content-type' , 'text/html');
    res.end('<h1>node js</h1> <p> this is frist project on node js</p>');

})
server.listen(port , ()=>{
    console.log(`server is listening on port ${port}`);
})
