const sumArray = (arr: number[]): number => {
  return arr.reduce((total, cur) => total + cur);
};

console.log(sumArray([1, 2, 3, 4, 5]));
