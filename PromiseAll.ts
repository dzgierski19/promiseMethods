import { PROMISEARRAY } from "./Global";

// Develop a function promise.all(arrayOfPromises).

//PROMISES

const promiseAll = <T>(arrayOfPromises: (() => Promise<T>)[]): Promise<T[]> => {
  return new Promise((resolve, reject) => {
    const arr = [] as T[];
    let counter = 0;
    arrayOfPromises.forEach((element, index) => {
      element()
        .then((value) => {
          counter++;
          arr[index] = value;
          if (counter === arrayOfPromises.length) {
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
  const arr = [] as T[];
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

promiseAllAsyncAwait([])
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });

//In Promise.all the order of the promises is maintained in the values variable, irrespective of which promise was first resolved.
