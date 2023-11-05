const PROMISE1 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("First Promise Resolved"), 2000);
});
const PROMISE2 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("Second Promise Resolved"), 3000);
});
const PROMISE3 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("Third Promise Resolved"), 1000);
});

const PROMISEARRAY = [PROMISE1, PROMISE2, PROMISE3];

const isArrayEmpty = <T>(array: Promise<T>[]) => {
  if (!array.length) {
    throw new Error("Please type an array with at least one promise");
  }
};

// Develop a function promise.all(arrayOfPromises).

const promiseAll = <T>(arrayOfPromises: Promise<T>[]): Promise<T[] | void> => {
  isArrayEmpty(arrayOfPromises);
  return new Promise((resolve, reject) => {
    const arr = [] as T[];
    arrayOfPromises.map((element) => {
      element
        .then((value) => {
          arr.push(value);
          resolve(arr);
        })
        .catch((error) => {
          reject(error);
          //   throw error
        });
    });
  });
};

// const promiseAllResult = promiseAll(PROMISEARRAY);
// console.log(promiseAllResult);

// setTimeout(() => console.log(promiseAllResult), 4000);

const promiseAllArrayFrom = <T>(
  arrayOfPromises: Promise<T>[]
): Promise<T[] | void> => {
  isArrayEmpty(arrayOfPromises);
  return new Promise((resolve, reject) => {
    const arr = [] as T[];
    Array.from(arrayOfPromises, (element) => {
      element
        .then((value) => arr.push(value))
        .catch((error) => {
          reject(error);
        });
    });
    resolve(arr);
  });
};

// const promiseAllArrayFromResult = promiseAllArrayFrom(PROMISEARRAY);
// console.log(promiseAllArrayFromResult);

// setTimeout(() => console.log(promiseAllArrayFromResult), 4000);

// Develop a function promise.race(arrayOfPromises).

const promiseRace = <T>(arrayOfPromises: Promise<T>[]): Promise<T | void> => {
  isArrayEmpty(arrayOfPromises);
  return new Promise((resolve, reject) => {
    arrayOfPromises.map((element) => {
      element
        .then((value) => resolve(value))
        .catch((error) => {
          reject(error);
        });
    });
  });
};

// const promiseRaceResult = promiseRace(PROMISEARRAY);
// console.log(promiseRaceResult);

// setTimeout(() => console.log(promiseRaceResult), 4000);

// Develop a function promise.last(arrayOfPromises).

const promiseAllArr = <T>(arrayOfPromises: Promise<T>[]): Promise<T[]> => {
  isArrayEmpty(arrayOfPromises);
  const arr = [] as T[];
  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((element) => {
      element
        .then((value) => {
          arr.push(value);
        })
        .catch((error) => reject(error));
    });
    resolve(arr);
  });
};

async function promiseLastAsync() {
  const result = await promiseAllArr(PROMISEARRAY);
  console.log(result[result.length - 1]);
}

setTimeout(() => {
  promiseLastAsync();
  promiseAllArr(PROMISEARRAY).then((results) => {
    console.log(results[results.length - 1] + " from PROMISES");
  });
}, 4000);

//   const arr = [] as T[];
//     Array.from(arrayOfPromises, (element) => {
//       element
//         .then((value) => arr.push(value))
//         .catch((error) => {
//           reject(error);
//         });
//     });
//     resolve(arr);

// promiseLast(PROMISEARRAY);

// setTimeout(() => console.log(promiseLastResult), 4000);

// Develop a function promise.ignoreErrors(arrayOfPromises).
// Develop a function promise.allSettled(arrayOfPromises).

// Complete the task using both async/await operators and without them.
