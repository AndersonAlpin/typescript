var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var result = document.getElementById("result");
var button = document.getElementById("button");
function sum(a, b) {
    return a + b;
}
button.addEventListener("click", function () {
    var resultSum = sum(Number(value1.value), Number(value2.value));
    result.value = resultSum.toString();
});
