import {createServer} from 'node:http';

const server = createServer((req, res) => {

console.log('req.headers:', req.headers);

  res.writeHead(200, {'Content-Type': 'text/html',
    'My-Custom-Header-85': 'My Custom Header Value'
  });
  res.end("<b>Hello from Nodejs server</b>");
  /*res.end(JSON.stringify({
    data: 'Hello World!',
  }))*/
});

server.listen(3000);