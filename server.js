var http = require("http")

http.createServer((req,res) => {
    console.log("server is running..");
    res.end("Hello");
}).listen(3000);