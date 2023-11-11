import { PROMISEARRAY } from "./Global";

// Develop a function promise.race(arrayOfPromises).

const promiseRace = <T>(arrayOfPromises: (() => Promise<T>)[]): Promise<T> => {
  return new Promise((resolve, reject) => {
    arrayOfPromises.forEach((element) => {
      element()
        .then((value) => {
          resolve(value);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};

promiseRace(PROMISEARRAY)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
