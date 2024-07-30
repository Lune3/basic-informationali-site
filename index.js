const https = require('http');
const fs = require('fs')

https.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    console.log(req.url)
    let path = '';
    switch (req.url){
        case "/":
            path += 'index.html';
            break;

        case "/about":
            path += 'about.html';
            break;

        case "/contact":
            path += 'contact-me.html';
            break;
        default:
            path += '404.html'
            break;
    }
    fs.readFile(path,(err,data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            res.end(data);
        }
    })
}).listen(8000)