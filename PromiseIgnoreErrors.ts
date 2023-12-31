// Develop a function promise.ignoreErrors(arrayOfPromises).

import { PROMISEARRAY } from "./Global";

const promiseIgnoreErrors = <T>(
  arrayOfPromises: (() => Promise<T>)[]
): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    let promiseCounter = 0;
    const resultArray: T[] = [];
    arrayOfPromises.forEach((element) => {
      element()
        .then((data) => {
          promiseCounter++;
          resultArray.push(data);
        })
        .catch(() => {
          promiseCounter++;
        })
        .finally(() => {
          if (promiseCounter === arrayOfPromises.length) {
            resolve(resultArray);
          }
        });
    });
  });
};

const promiseIgnoreErrorsAsyncAwait = async <T>(
  arrayOfPromises: (() => Promise<T>)[]
): Promise<T[]> => {
  const resultArray: T[] = [];
  for (const element of arrayOfPromises) {
    try {
      const result = await element();
      resultArray.push(result);
    } catch (error) {}
  }
  return resultArray;
};

promiseIgnoreErrors(PROMISEARRAY)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
