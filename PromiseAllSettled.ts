// Develop a function promise.allSettled(arrayOfPromises).

import { PROMISEARRAY } from "./Global";

type PromiseType<T> = {
  status: "fulfilled" | "rejected";
  value?: T;
  reason?: any;
};

const promiseAllSettled = <T>(
  arrayOfPromises: (() => Promise<T>)[]
): Promise<PromiseType<T>[]> => {
  return new Promise((resolve) => {
    const arr = [] as PromiseType<T>[];
    let counter = 0;
    arrayOfPromises.forEach((element, index) => {
      element()
        .then((result) => {
          counter++;
          arr.push({ status: "fulfilled", value: result });
          if (counter === arrayOfPromises.length) {
            resolve(arr);
          }
        })
        .catch((error) => {
          counter++;
          arr.push({ status: "rejected", reason: error });
          if (counter === arrayOfPromises.length) {
            resolve(arr);
          }
        });
    });
  });
};

const promiseAllSettledAsyncAwait = async <T>(
  arrayOfPromises: (() => Promise<T>)[]
) => {
  const array = [] as PromiseType<T>[];
  for (const element of arrayOfPromises) {
    try {
      const result = await element();
      array.push({ status: "fulfilled", value: result });
    } catch (error) {
      array.push({ status: "rejected", reason: error });
    }
  }
  return array;
};

promiseAllSettledAsyncAwait(PROMISEARRAY)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
