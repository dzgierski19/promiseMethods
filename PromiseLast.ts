import { PROMISEARRAY } from "./Global";

// Develop a function promise.last(arrayOfPromises).

const promiseLast = <T>(arrayOfPromises: (() => Promise<T>)[]): Promise<T> => {
  const arr = [] as T[];
  return new Promise((resolve, reject) => {
    let resolvedPromiseCounter = 0;
    for (let i = 0; i < arrayOfPromises.length; i++) {
      arrayOfPromises[i]()
        .then((value) => {
          resolvedPromiseCounter++;
          if (resolvedPromiseCounter === arrayOfPromises.length) {
            resolve(value);
          }
        })
        .catch((error) => {
          reject(error);
        });
    }
  });
};

promiseLast(PROMISEARRAY)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
