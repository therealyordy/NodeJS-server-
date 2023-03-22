const http = require("http")

const server = http.createServer((req, res)=> {
    console.log("server is created")
})

const PORT = 4000;

server.listen(PORT, ()=> console.log('server is running on port ${PORT}'))