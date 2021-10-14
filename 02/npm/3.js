const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
  bar.tick();
  console.trace();
  if (bar.complete) {
    clearInterval(timer);
  }
}, 100);
