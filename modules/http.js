const http = require("http");

const port = 8080;

const server = http.createServer((req, resp) => {
  if (req.url === "/home") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.end("<h1>Home Page</h1>");
  }
  if (req.url === "/users") {
    const users = [
      { name: "Flávio Vani", email: "flavio@vani.com" },
      { name: "Gláucia Vani", email: "glaucia@vani.com" },
    ];
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
