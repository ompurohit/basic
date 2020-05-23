const events = require('events');
const event = new events.EventEmitter();

event.on('kuchBhiTrigger', () => console.log("welcome to nodeJs"));

event.emit("kuchBhiTrigger");