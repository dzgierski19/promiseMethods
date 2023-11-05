import { PROMISEARRAY, isArrayEmpty } from "./Global";

// Develop a function promise.race(arrayOfPromises).

const promiseRace = <T>(arrayOfPromises: Promise<T>[]): Promise<T> => {
  isArrayEmpty(arrayOfPromises);
  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((element) => {
      element
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

const promiseRaceResult = promiseRace(PROMISEARRAY);
console.log(promiseRaceResult);

// async function promiseRaceAsync() {
//   const result = await promiseRace(PROMISEARRAY);
//   return result;
// }

// const b = promiseRaceAsync();

const a = Promise.race(PROMISEARRAY);

setTimeout(() => {
  promiseRaceResult.then((data) => {
    console.log(data);
  });
}, 6000);
