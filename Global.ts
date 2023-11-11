const promise1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("First Promise Resolved"), 2000);
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Second Promise Resolved"), 3000);
  });
};

const promise3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Third Promise Resolved"), 1000);
  });
};

export const PROMISEARRAY = [promise1, promise2, promise3];
