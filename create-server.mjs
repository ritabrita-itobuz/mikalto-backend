import * as fs from 'fs';
import * as http from 'http';

const server = http.createServer((req, res) => {
  if(req.url === "/home" || req.url === "/")
  {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { 'Content-Type': 'text/txt'});
    fs.createReadStream("/Users/it012312/Desktop/mikalto-backend/newfile.txt").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");