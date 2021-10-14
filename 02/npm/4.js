const http = require("http");
const mist = require("minimist");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("hi");
});

server.listen(3000, "localhost", () => {
  //   console.log(1);
  process.exit(0); // 终止
  //   console.log(process.env);
});

console.log(mist(process.argv.slice(2)));

const ProgressBar = require("progress");
