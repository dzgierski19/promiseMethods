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
    const arr: PromiseType<T>[] = [];
    arrayOfPromises.forEach((element, index) => {
      element()
        .then((result) => {
          arr.push({ status: "fulfilled", value: result });
        })
        .catch((error) => {
          arr.push({ status: "rejected", reason: error });
        })
        .finally(() => {
          if (arr.length === arrayOfPromises.length) {
            resolve(arr);
          }
        });
    });
  });
};

const promiseAllSettledAsyncAwait = async <T>(
  arrayOfPromises: (() => Promise<T>)[]
) => {
  const array: PromiseType<T>[] = [];
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

promiseAllSettled(PROMISEARRAY)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
