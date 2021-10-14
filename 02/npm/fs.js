const fs = require("fs");
fs.stat("./helloworld.txt", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  //可以访问 `stats` 中的文件属性

  //   console.log(stats.isFile());
  //   console.log(stats.isDirectory());
  //   console.log(stats.isSymbolicLink());
});

// fs.readFile("./helloworld.txt", (err, data) => {
//   if (err) return;
//   console.log(data);
// });

// fs.writeFile("./helloworld.txt", "11", { flag: "a+" }, (err) => {
//   if (err) return;
// });

// fs.appendFile("./helloworld.txt", "append", (err) => {
//   if (err) return;
// });

const folderName = "./22";

// fs.readdir(folderName, (err, data) => {
//   console.log(data);
// });

// fs.exists(folderName, (data) => {
//   console.log(data); //  全部的文件和子文件夹
// });

fs.readdir(folderName, (err, data) => {
  console.log(data);
});

// fs.rename(folderName, "./123", (err) => {}); // rename

// 只能删除空文件夹
fs.rmdir(folderName, (err) => {
  console.log(err);
});

// 可删除包含内容的文件夹
const fs1 = require("fs-extra");
fs1.remove("./123", (err) => {
  console.log(err);
});
