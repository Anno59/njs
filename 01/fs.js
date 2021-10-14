const fs = require("fs");

fs.writeFile("./helloworld.txt", "test", (err, res) => {
  if (err) return;

  console.log("success");
});
