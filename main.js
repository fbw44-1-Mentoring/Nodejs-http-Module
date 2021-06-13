const http =require("http")
const fs = require("fs")

//create http server
const server = http.createServer((req,res)=>{
    console.log("received new request")
        console.log(req.method)
        console.log(req.url)

        if(req.url==="/" && req.method==="GET"){
            const htmlPage= fs.readFileSync("./index.html","utf8")
            res.write(htmlPage)
            res.end()
        }
        if(req.url==="/about" && req.method==="GET"){
            const aboutPage= fs.readFileSync("./about.html","utf8")
            res.write(aboutPage)
            res.end()
        }
        if(req.url==="/users"){
            res.write("<h1> Users Data </h1>")
            res.end()
        }
      
})


server.listen(3000,()=>console.log("server running on port 3000"))

