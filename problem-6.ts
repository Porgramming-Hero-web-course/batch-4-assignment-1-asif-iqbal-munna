interface Person {
  name: string;
  age: number;
  email: string;
}

const updateProfile = (person: Person, profile: Partial<Person>): Person => {
  return { ...person, ...profile };
};

const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { age: 26 }));
