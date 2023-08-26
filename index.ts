import { interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

//https://www.learnrxjs.io/learn-rxjs/operators/filtering/throttle

// Example 1: Throttle for 2 seconds, based on second observable

// emit value every 1 second
const srcInterval$ = interval(1000);
//throttle for 2 seconds, emit latest value
const example = srcInterval$.pipe(throttle((val) => interval(2000)));
const subscribe = example.subscribe((val) => console.log(val));
//output: 0...3...6...9
