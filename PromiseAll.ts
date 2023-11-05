import { PROMISEARRAY, isArrayEmpty } from "./Global";

// Develop a function promise.all(arrayOfPromises).

const promiseAll = <T>(arrayOfPromises: Promise<T>[]): Promise<T[]> => {
  isArrayEmpty(arrayOfPromises);
  return new Promise((resolve, reject) => {
    const arr = [] as T[];
    arrayOfPromises.forEach((element) => {
      element
        .then((value) => {
          arr.push(value);
          resolve(arr);
        })
        .catch((error) => {
          reject(error);
          throw error;
        });
    });
  });
};

const promiseAllAsyncAwait = async <T>(arrayOfPromises: Promise<T>[]) => {
  isArrayEmpty(arrayOfPromises);
  const arr = [] as T[];
  // for (const element of arrayOfPromises) {
  arrayOfPromises.forEach(async (element) => {
    try {
      const value = await element;
      arr.push(value);
    } catch (error) {
      throw error;
    }
  });
  return arr;
};

const a = promiseAllAsyncAwait(PROMISEARRAY);

console.log(a);

setTimeout(() => console.log(a), 4000);

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

async function promiseAllAsync() {
  const result = await promiseAll(PROMISEARRAY);
  //   console.log(result[result.length - 1] + "2");
  //   console.log(result);
  return result;
}
