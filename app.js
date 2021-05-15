const http = require('http');
const fs = require('fs');
//Hola mundo sincrono
const data = fs.readFileSync('./WWW/file.txt')

//http => (request, response)
//HTML, CSS, JS, IMG, Audio, Video
//hola mundo asincrono + leer y enviar segun extension
http.createServer((request,response)=>{
  console.log(request.url);
  const file = request.url == '/' ? './WWW/index.html' : `./WWW/${request.url}`;
  fs.readFile(file,(err,data)=>{
    if(err){
      response.writeHead(404, {"Content-Type":"text/plain"});
      response.write("file not found");
      response.end();
    }
    else{
      //"hola.como estas".split(".").pop()
      const extension = file.split('.').pop();
      switch(extension){
        case 'txt':
          response.writeHead(200, {"Content-Type":"text/plain"});
          break;
        case 'html':
          response.writeHead(200, {"Content-Type":"text/html"});
          break;
        case 'jpeg':
          response.writeHead(200, {"Content-Type":"image/jpeg"});
          break;
        case 'css':
          response.writeHead(200, {"Content-Type":"txt/css"});
          break;
        case 'js':
          response.writeHead(200, {"Content-Type":"text/javascript"});
          break;
        case 'ico':
          response.writeHead(200, {"Content-Type":"image/x-icon"});
          break;
        default:
          response.writeHead(200, {"Content-Type":"text/plain"});
      }
      //response.writeHead(200, {"Content-Type":"text/plain"});
      response.write(data);
      response.end();
    }
  });
  //response.writeHead(200, {"Content-Type":"text/plain"});
  //response.write(data);
  //response.end();
}).listen(4444);
