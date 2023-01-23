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
        // fs.writeFile('demo.txt', 'May allah help me to learn MERN stack', function (err) {
        //     if (err) {
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write('File Write Failed');
        //         res.end();
        //     } else {
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write('File Write Successful');
        //         res.end();
        //     }
        // });

        // Synchronous File Write
        // let err=fs.writeFileSync('DemoSync.txt','Inshallah i will learn MERN.');
        // if (err) {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write('File Write Failed');
        //     res.end();
        //
        // } else {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write('File Write Successful');
        //     res.end();
        // }

        // Asynchronous File Rename
        // fs.rename('demo.txt','NewDemo.txt',function(err,){
        //     if (err) {
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write('File Rename Failed');
        //         res.end();
        //     }else{
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write('File Rename Successful');
        //         res.end();
        //     }
        // })
        // Synchronous File Rename
        // let err=fs.renameSync('NewDemo.txt','DemoNew.txt');
        // if(err) {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write('File Rename Failed');
        //     res.end();
        // }
        // else{
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write('File Rename Successful');
        //     res.end();
        // }
        // Asynchronous File Delete
        // fs.unlink('DemoNew.txt',function(err){
        //     if (err) {
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write('File Delete Failed');
        //         res.end();
        //     }else{
        //         res.writeHead(200, {'Content-Type': 'text/html'});
        //         res.write('File Delete Successful');
        //         res.end();
        //     }
        // })
        // Synchronous File Delete
        // let err= fs.unlinkSync('demo.txt');
        // if (err) {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write('File Delete Failed');
        //     res.end();
        // }else{
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write('File Delete Successful');
        //     res.end();
        // }
        // Asynchronous File Exists
        // fs.exists('DemoSync.txt', function(get){
        // if (get) {
        //     res.end('true');
        // }else{
        //     res.end('false');
        // }
        // })
        // Synchronous File Exists
        let get =fs.existsSync('DemoSync.txt');
        if(get){
            res.end('true');
        }else{
            res.end('false');
        }

    }
});
server.listen(8050);
console.log('Server Listen Successfully');