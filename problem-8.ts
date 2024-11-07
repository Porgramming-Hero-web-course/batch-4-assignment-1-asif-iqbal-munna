const validateKeys = <T>(obj: T, keys: (keyof T)[]): boolean => {
  return keys.every((key) => obj[key] !== undefined);
};

const person2 = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(validateKeys(person2, ["name", "age"]));
