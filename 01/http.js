const http = require("http");

const server = http.createServer((request, res) => {
  const url = request.url;

  res.write(url);
  res.end();
});

server.listen(8081, "localhost", () => {
  console.log("listening");
});
