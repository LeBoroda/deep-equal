import { DeepEqualEngine } from "./src/deep-equal-engine.js";

const greatEqualizer = new DeepEqualEngine();
console.log(greatEqualizer.deepEqual([1, 2], [1, 2]));
console.log(greatEqualizer.deepEqual(new Date("2323-01-11"), new Date("2323-01-12")));
