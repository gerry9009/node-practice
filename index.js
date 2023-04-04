const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (true) {
    case req.url === "/" && req.method === "GET":
      fs.readFile(__dirname + "/views/home.html", (err, data) => {
        res.setHeader("content-type", "text/html");
        res.writeHead(200);
        res.end(data);
      });
      break;
    case req.url === "/script.js" && req.method === "GET":
      fs.readFile(__dirname + "/public/script.js", (err, data) => {
        res.setHeader("content-type", "application/javascript");
        res.end(data);
      });
      break;
    case req.url === "/phones" && req.method === "GET":
      fs.readFile(__dirname + "/phone.json", (err, data) => {
        res.setHeader("content-type", "application/json");
        res.writeHead(200);
        res.end(data);
      });
      break;
    case req.url === "/phones" && req.method === "POST":
      let body = "";

      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        let newPhone = JSON.parse(body);

        fs.readFile(__dirname + "/phone.json", (err, data) => {
          const phones = JSON.parse(data);
          phones.push(newPhone);

          fs.writeFile(
            __dirname + "/phone.json",
            JSON.stringify(phones),
            () => {
              res.end(JSON.stringify(newPhone));
            }
          );
        });
      });
      break;

    default:
      res.writeHead(404);
      res.end("Something went wrong");
  }
});

server.listen(8080, () => console.log("Server is running on 8080 port"));
