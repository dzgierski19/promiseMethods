import { PROMISEARRAY } from "./Global";

// Develop a function promise.all(arrayOfPromises).

//PROMISES

const promiseAll = <T>(arrayOfPromises: (() => Promise<T>)[]): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const arr: T[] = [];
    arrayOfPromises.forEach((element, index) => {
      element()
        .then((value) => {
          arr[index] = value;
          if (arr.length === arrayOfPromises.length) {
            resolve(arr);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

//ASYNC/AWAIT

const promiseAllAsyncAwait = async <T>(
  arrayOfPromises: (() => Promise<T>)[]
): Promise<T[]> => {
  const arr: T[] = [];
  for (const element of arrayOfPromises) {
    try {
      const transfer = await element();
      arr.push(transfer);
    } catch (error) {
      throw error;
    }
  }
  return arr;
};

promiseAllAsyncAwait(PROMISEARRAY)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

//In Promise.all the order of the promises is maintained in the values variable, irrespective of which promise was first resolved.
