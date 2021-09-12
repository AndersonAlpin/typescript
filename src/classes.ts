class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  printDetails(): void {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  }
}

const firstUser = new User("Anderson", 27);
firstUser.printDetails();