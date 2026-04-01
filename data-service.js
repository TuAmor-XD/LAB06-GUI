import { emitter } from './event-emitter.js';

let count = 0;
export const DataService = {
    increment() {
        count++;
        emitter.emit('count:changed', count);
    }
}



