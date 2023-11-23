const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('turn off motor');
  setTimeout(() =>{
    console.log('gentle reminder');
  },5000)
});
console.log("scriptis running")
myEmitter.emit('waterfull');
console.log("still running")