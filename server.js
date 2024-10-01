const http = require("node:http");

const server = http.createServer(function (req, res) {
  if (req.url === "/gg") {
    res.end("I am the greatest of all time.");
  } else {
    res.end("Hello World");
  }
});

server.listen(1234);
