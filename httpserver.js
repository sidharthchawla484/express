const http= require('http');
const port = process.env.Port || 7000;

const server = http.createServer((req , res)=>{
    console.log(req)
    res.statusCode = 200;
    res.setHeader = ('content-type' , 'text/html');
    res.end('<h1>node js</h1> <p> this is frist project on node js</p>');

})
server.listen(port , ()=>{
    console.log(`server is listening on port ${port}`);
})
