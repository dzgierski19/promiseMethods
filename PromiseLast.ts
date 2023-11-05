import { PROMISEARRAY, isArrayEmpty } from "./Global";

// Develop a function promise.last(arrayOfPromises).

const promiseAllArr = <T>(arrayOfPromises: Promise<T>[]): Promise<T[]> => {
  isArrayEmpty(arrayOfPromises);
  const arr = [] as T[];
  // return new Promise((resolve, reject) => {
  //   arrayOfPromises.forEach((element) => {
  //     element
  //       .then((value) => {
  //         arr.push(value);
  //         resolve(arr);
  //       })
  //       .catch((error) => reject(error));
  //   });
  // });
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arrayOfPromises.length; i++) {
      arrayOfPromises[i].then((value) => {
        arr.push(value);
        resolve(arr);
      });
    }
  });
};

const promiseLast = <T>(arrayOfPromises: Promise<T>[]): Promise<T> => {
  return promiseAllArr(arrayOfPromises).then((data) => {
    if (data.length) {
      console.log(data.length);
      return data[data.length - 1];
    }
    throw new Error("array error");
  });
};

// async function promiseRaceAsync() {
//   const result = await promiseAllArr(PROMISEARRAY);
//   const lastItem = result[result.length - 1];
//   console.log(lastItem);
//   return lastItem;
// }

const promiseLastResult = promiseLast(PROMISEARRAY);
console.log(promiseLastResult);

setTimeout(() => {
  promiseLastResult.then((data) => {
    console.log(data);
  });
}, 6000);
