const stream = require("stream");

const writeStream = new stream.Writable({
  write: (chunk, e, next) => {
    console.log(chunk.toString());
    next();
  },
});

process.stdin.pipe(writeStream);
