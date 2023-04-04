const http = require("http");
const fs = require("fs");

const { add, extraction } = require("./calc.js");

const x = add(10, 5);
const y = extraction(10, 5);

const port = 8080;

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html; charset=utf-8");

  switch (true) {
    case req.url === "/" && req.method === "GET":
      // fs.readFile( filename, encoding, callback_function )
      // read the file
      fs.readFile(__dirname + "/pages/index.html", (err, data) => {
        res.writeHead(200);
        res.end(data);
      });

      break;
    case req.url === "/login" && req.method === "GET":
      fs.readFile(__dirname + "/pages/login.html", (err, data) => {
        res.writeHead(200);
        res.end(data);
      });
      break;
    default:
      fs.readFile(__dirname + "/pages/404.html", (err, data) => {
        res.writeHead(404);
        res.end(data);
      });
  }
});

server.listen(port, () => console.log(`Server is running on ${port}`));
