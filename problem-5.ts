const getProperty = <T>(obj: T, key: keyof T): T[keyof T] => obj[key];

const person = { name: "Alice", age: 30 };

console.log(
  getProperty<{ name: string; age: number }>({ name: "Alice", age: 30 }, "name")
);
