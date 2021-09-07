const value1 = document.getElementById("value1") as HTMLInputElement;
const value2 = document.getElementById("value2") as HTMLInputElement;
const result = document.getElementById("result") as HTMLInputElement;
const button = document.getElementById("button")!;

function sum(a: number, b: number) {
  return a + b;
}

button.addEventListener("click", function () {
  const resultSum = sum(Number(value1.value), Number(value2.value));
  result.value = resultSum.toString();
})