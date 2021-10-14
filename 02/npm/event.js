const event = require("events");
const emitter = new event();

function a() {
  console.log(2);
}
emitter.on("test", function () {
  console.log(1);
});
emitter.on("test", a);
emitter.prependListener("test", function () {
  console.log(3);
}); // 将当前事件的处理函数放置最前

// console.log(emitter.eventNames());
// console.log(emitter.getMaxListeners()); // 默认 10 个
// console.log(emitter.listenerCount());

emitter.removeListener("test", a);
emitter.emit();
