const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("HTTP Server has been created");
});

server.listen(port, () => console.log(`Server is running on ${port}`));
