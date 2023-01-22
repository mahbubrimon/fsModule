let fs=require('fs');
let http=require('http');

let server=http.createServer(function (req,res) {

    if(req.url==="/"){
        //Asynchronous
        // fs.readFile('Home.html',function(error,data){
        // res.writeHead(200,{'Content-Type':'text/html'});
        // res.write(data);
        // res.end();


        //Synchronous
        let myData=fs.readFileSync('Home.html');
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(myData);
            res.end();
    }

});

server.listen(4040);
console.log('Server Listen Successfully');