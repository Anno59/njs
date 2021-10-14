const path = require("path");

const foo = "./users/joe/..//test.txt";

console.log(path.dirname(foo)); // .
console.log(path.basename(foo, path.extname(foo))); // helloworld
console.log(path.extname(foo)); // .txt

console.log(path.resolve(foo));
console.log(path.normalize(foo));
console.log(path.resolve("ha", foo));
console.log(path.resolve("../ha", foo));
console.log(path.resolve("/ha", foo));

const path1 = "./haha";
const path2 = "../11";
const path3 = "/path";

console.log(path.join(path1, path2));
console.log(path.normalize(path1 + path2));
console.log(path.resolve(path1, path2));

const os = require("os");
console.log(os.homedir()); // C:\Users\Lenovo
console.log(os.freemem()); // 18905747456
console.log(os.tmpdir()); // C:\Users\Lenovo\AppData\Local\Temp
console.log(os.type()); // Windows_NT
console.log(os.userInfo());
