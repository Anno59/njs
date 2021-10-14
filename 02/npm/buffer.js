// const buffer = require("buffer");
console.log(Buffer.from("ey!"));
console.log(Buffer.alloc(1024));
// console.log(Buffer.allocUnsafe(1024));
const buf = Buffer.from("ey");
console.log(buf, buf[0], buf.length);
buf[1] = 2113;
console.log(buf, buf.toString());
