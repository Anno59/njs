const http = require("http");
const server = http.createServer((req, res) => {
  let str = "";
  req.on("data", (chunk) => {
    str += chunk;
  });

  req.on("end", () => {
    console.log(str);
  });

  //   res.on("data", (chunk) => {
  //     str += chunk;
  //   });

  //   res.on("end", () => {
  //     console.log(str);
  //   });
  res.end(str);
});

server.listen("8081", "localhost", () => {});
