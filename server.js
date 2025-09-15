const http = require('http')
const path = require('path')
const url = require('url')
const querystring = require('node:querystring');

// GET Request

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url === '/') {
//         res.writeHead(200, { 'content-type': 'text/plain' })
//         res.end('Welcome to Home Page')
//     } else {
//         res.writeHead(404, { 'content-type': 'text/plain' })
//         res.end('Page Not Found.')
//     }
// })

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server Running at http://localhost:${PORT}`)
// })

//Post request

// const server = http.createServer((req, res) => {
//     if (req.method === 'POST' && req.url === '/submit') {

//         let body = ''

//         req.on('data', (chunk) => {
//             body += chunk.toString()
//         })

//         req.on('end', () => {
//             res.writeHead(200, { 'content-type': 'application/json' })
//             res.end(JSON.stringify({message:'Data Received',data:body}))
//         })
//     } else {
//         res.writeHead(404, { 'content-type': 'text/plain' })
//         res.end('Page Not Found.')
//     }
// })

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server Running at http://localhost:${PORT}`)
// })

// handle search

// const server = http.createServer((req, res) => {
//     if (req.method === 'GET' && req.url.startsWith('/search')) {
//         const queryObject = url.parse(req.url, true).query;

//         res.writeHead(200, { 'content-type': 'application/json' })
//         res.end(JSON.stringify({ message: 'Query Received', queryObject }))

//     } else {
//         res.writeHead(404, { 'content-type': 'text/plain' })
//         res.end('Page Not Found.')
//     }
// })

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server Running at http://localhost:${PORT}`)
// })

// route handler

// const routes = {
//     '/': (req,res)=>{
//         res.writeHead(200,{'content-type':'text/plain'})
//         res.end('Welcome to home page')
//     },
//     '/about': (req,res)=>{
//         res.writeHead(200,{'content-type':'text/plain'})
//         res.end('Welcome to About page')
//     },
//     '/notfound': (req,res)=>{
//         res.writeHead(404,{'content-type':'text/plain'})
//         res.end('page not found')
//     }
// }

// const server = http.createServer((req, res) => {

//     const {pathname} = url.parse(req.url)

//     if (routes[pathname]) {
//         routes[pathname](req,res)
//     } else {
//         routes['/notfound'](req,res)
//     }
// })

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server Running at http://localhost:${PORT}`)
// })

// dynamic routes handling


// const server = http.createServer((req, res) => {

//     const { pathname } = url.parse(req.url)

//     if (pathname.startsWith('/user/')) {
//         const userID = pathname.split('/')[2]
//         res.writeHead(200, { 'content-type': 'text/plain' })
//         res.end(`user id is ${userID}`)
//     } else {
//         res.writeHead(404, { 'content-type': 'text/plain' })
//         res.end('page not found')
//     }
// })

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server Running at http://localhost:${PORT}`)
// })

// middleware function for logging


// function logRequest(req, res, next) {
//     console.log(`${req.method} request made to ${req.url}`);
//     next(req, res);
// }

// const server = http.createServer((req, res) => {
//     logRequest(req, res, (req, res) => {
//         const { pathname } = url.parse(req.url)

//         if (pathname.startsWith('/user/')) {
//             const userID = pathname.split('/')[2]
//             res.writeHead(200, { 'content-type': 'text/plain' })
//             res.end(`user id is ${userID}`)
//         } else {
//             res.writeHead(404, { 'content-type': 'text/plain' })
//             res.end('page not found')
//         }
//     })
// })

// const PORT = 3000;
// server.listen(PORT, () => {
//     console.log(`Server Running at http://localhost:${PORT}`)
// })

// form submission

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let data = ''

        req.on('data', (chunk) => {
            data += chunk
        })
        req.on('end', () => {
            const parsedData = querystring.parse(data)
            res.writeHead(200, { 'content-type': 'application/json' })
            res.end(JSON.stringify({ message: 'Form Data Received', parsedData }))
        })
    }
})

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`)
})