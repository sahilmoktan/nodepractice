const http = require('http')
const fs = require('fs')
const port = process.env.PORT || 3000

const server = http.createServer ((req, res)=>{
    res.setHeader('Content-Type', 'text/html')
    // console.log(req)
    
    if(req.url =='/') {
        res.statusCode =200;
        res.end('<h1> this is if request</h1>')
    }
    else if(req.url =='/about') {
        res.statusCode =200;
        res.end('<h1> this else if request</h1>')
    }
    else if(req.url =='/hello') {
        res.statusCode =200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else{
        res.statusCode = 404
        res.end('<h1> page not found</h1>')
    }
})


server.listen (port, ()=>{

    console.log(`server is listinging on port ${port}`)
})