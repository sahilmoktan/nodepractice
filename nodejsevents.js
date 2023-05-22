import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterFull', () => {
    console.log('turn off Motor!');
    setTimeout(() =>{
        console.log('Please, turn off the Motor!');
    },3000)
});
myEmitter.emit('waterFull');

console.log('file is running');