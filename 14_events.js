const EventEmitter = require('events');

const emitter = new EventEmitter();

setImmediate(() => {
    emitter.emit("test");
});

emitter.on("test", () => {
    console.log("test event fired");
});
emitter.on("test", () => {
    console.log("test event fired");
});