class User {
  private name: string;
  readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  printDetailsUser(): void {
    console.log(`Name: ${this.name} - Age: ${this.age}`);
  }
}

class UserAccount extends User {
  public nickname: string;
  protected level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  printDetailsUserAccount(): void {
    console.log(`Nickname: ${this.nickname} - Age: ${this.age}  - Level: ${this.level}`);
  }
}

const firstUser = new User("Anderson", 27);
firstUser.printDetailsUser();

const secondUser = new UserAccount("Anderson", 27, "Alpin", 53);
// secondUser.name = "Bruno"
console.log(secondUser);
console.log(secondUser.age);
secondUser.printDetailsUser();
secondUser.printDetailsUserAccount();