const removeDuplicates = (arr: number[]): number[] => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 2, 4, 3, 2, 2, 4, 4, 5]));
