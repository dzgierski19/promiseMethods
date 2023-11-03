const PROMISE1 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("First Promise Resolved"), 2000);
});
const PROMISE2 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("Second Promise Resolved"), 3000);
});
const PROMISE3 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("Third Promise Resolved"), 1000);
});

console.time("A");

const PROMISEARRAY = [PROMISE1, PROMISE2, PROMISE3];

// Develop a function promise.all(arrayOfPromises).

const promiseAll = (
  arrayOfPromises: Promise<string>[]
): Promise<string[] | void> => {
  return new Promise((resolve, reject) => {
    const arr = [] as string[];
    arrayOfPromises.forEach((element) => {
      element
        .then((value) => arr.push(value))
        .catch((error) => {
          throw error;
        });
    });
    resolve(arr);
  });
};

const promiseAllResult = promiseAll(PROMISEARRAY);
console.log(promiseAllResult);

setTimeout(() => console.log(promiseAllResult), 4000);

// Develop a function promise.race(arrayOfPromises).

const promiseRace = (
  arrayOfPromises: Promise<string>[]
): Promise<string | void> => {
  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((element) => {
      element
        .then((value) => resolve(value))
        .catch((error) => {
          reject(error);
        });
    });
  });
};

const promiseRaceResult = promiseRace(PROMISEARRAY);
console.log(promiseRaceResult);

setTimeout(() => console.log(promiseRaceResult), 4000);

// Develop a function promise.last(arrayOfPromises).
// Develop a function promise.ignoreErrors(arrayOfPromises).
// Develop a function promise.allSettled(arrayOfPromises).

// Complete the task using both async/await operators and without them.
