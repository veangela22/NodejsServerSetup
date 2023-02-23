// import http
const http = require("http")

// create server with HTTP
const server = http.createServer((req, res)=> {
    console.log("server is created")
})

// initial port
const PORT = 4000;

// listen to port
server.listen(PORT, ()=> console.log(`Server is up and running on port ${PORT}`))