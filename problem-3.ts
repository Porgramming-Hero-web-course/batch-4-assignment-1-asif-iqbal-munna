const countWordOccurrences = (sentence: string, word: string): number => {
  const words = sentence.split(" ");
  let count = 0;

  words.forEach((w) => {
    if (w.split(",")[0].toLowerCase() === word.toLowerCase()) {
      count++;
    }
  });

  return count;
};

console.log(
  countWordOccurrences("I love typeScript, only typeScript", "typeScript")
);
