import { DeepEqualEngine } from "./src/deep-equal-engine.js";

const greatEqualizer = new DeepEqualEngine();
console.log(greatEqualizer.deepEqual([1, 2], [1, 2]));
