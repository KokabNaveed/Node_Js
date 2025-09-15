const http = require('http')

const server = http.createServer((req,res)=>{
    res.statusCode =200 ;
    res.setHeader('content-Type', 'text/plain')
    res.end('Hello Node JS')
})

server.listen(3000,()=>{
    console.log(`Server Running at http://localhost:3000`)
})