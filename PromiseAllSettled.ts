// Develop a function promise.allSettled(arrayOfPromises).

import { PROMISEARRAY } from "./Global";

const result = Promise.allSettled(PROMISEARRAY);
console.log(result);

setTimeout(() => console.log(result), 4000);
