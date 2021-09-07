// boolean (true/false)
let isOnline: boolean;
isOnline = true;

// string ('foo', "foo", `foo`)
let msg: string;
msg = "All ok"

// number (int, float, hex, binary)
let value: number;
value = 0x313;

// array (type[])
let numbers: number[];
numbers = [12, 15, 51, 55];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let defined: [number, string, boolean]
defined = [1, "position", true]

// enum
enum hexColors {
  black = "#000",
  white = "#fff"
}

// any (anything) NOT RECOMMENDED
let anything: any;
anything = "any";
anything = [1];
anything = 10;

// void (empty)
function clg(): void {
  console.log('nothing')
}

// null/undefined
type newType = number | undefined;

// never
function error(): never {
  throw new Error("not implemented");
}

// object
let person: object;
person = {
  firstName: "Dave",
  lastName: "Grohl",
  age: 30,
}

// Type Inference
let msg2 = "Use type inference"
msg = "Use new type inference"

window.addEventListener("click", (e) => {
  console.log(e.target);
})