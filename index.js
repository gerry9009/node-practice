const http = require("http");

const { add, extraction } = require("./calc.js");

const x = add(10, 5);
const y = extraction(10, 5);

const port = 8080;

const server = http.createServer((req, res) => {
  // res.setHeader(name, value) =>  Set document header

  // create routes depend on the request
  switch (true) {
    case req.url === "/" && req.method === "GET":
      // res.setHeader(name, value) =>  Set document header
      res.setHeader("content-type", "text/html; charset=utf-8");

      // res.writeHead() =>  sends a response header to the request
      //-> Status code is a 3 digit HTTP status code
      res.writeHead(200);

      // response process ->
      // this signals to the server that all of the response headers and body have been sent
      //-> MUST BE CALLED ON EACH RESPONSE
      res.end(
        `<h1>Main page</h1>
        <div>X value:${x}</div>
        <div>Y value:${y}</div>
        <a href="/login">Login</a>`
      );
      break;
    case req.url === "/login" && req.method === "GET":
      // res.setHeader(name, value) =>  Set document header
      res.setHeader("content-type", "text/html; charset=utf-8");

      // res.writeHead() =>  sends a response header to the request
      //-> Status code is a 3 digit HTTP status code
      res.writeHead(200);

      // response process ->
      // this signals to the server that all of the response headers and body have been sent
      //-> MUST BE CALLED ON EACH RESPONSE
      res.end('<h1>Login</h1><a href="/">Main</a>');
      break;
    default:
      // res.setHeader(name, value) =>  Set document header
      res.setHeader("content-type", "text/html; charset=utf-8");
      // res.writeHead() =>  sends a response header to the request
      //-> Status code is a 3 digit HTTP status code
      res.writeHead(404);

      // response process ->
      // this signals to the server that all of the response headers and body have been sent
      //-> MUST BE CALLED ON EACH RESPONSE
      res.end('<h1>404</h1><h2>Page not found</h2><a href="/">Main</a>');
  }
});

server.listen(port, () => console.log(`Server is running on ${port}`));
