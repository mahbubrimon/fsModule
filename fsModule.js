let fs=require('fs');
let http=require('http');

let server=http.createServer(function (req,res) {

    if (req.url === "/") {
        //Asynchronous File Read
        // fs.readFile('Home.html',function(error,data){
        // res.writeHead(200,{'Content-Type':'text/html'});
        // res.write(data);
        // res.end();

        //Synchronous File Read
        //     let myData=fs.readFileSync('Home.html');
        //         res.writeHead(200,{'Content-Type':'text/html'});
        //         res.write(myData);
        //         res.end();
        // }

        //Asynchronous File Write
        fs.writeFile('demo.txt', 'May allah help me to learn MERN stack', function (err) {
            if (err) {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Write Failed');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write('File Write Successful');
                res.end();
            }
        });
    }
});
server.listen(4040);
console.log('Server Listen Successfully');