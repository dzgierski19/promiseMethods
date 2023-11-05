export const PROMISE1 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("First Promise Resolved"), 2000);
});
export const PROMISE2 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("Second Promise Resolved"), 3000);
});
export const PROMISE3 = new Promise<string>((resolve, reject) => {
  setTimeout(() => resolve("Third Promise Resolved"), 1000);
});

export const PROMISEARRAY = [PROMISE1, PROMISE2, PROMISE3];

export const isArrayEmpty = <T>(array: Promise<T>[]) => {
  if (!array.length) {
    throw new Error("Please type an array with at least one promise");
  }
};
