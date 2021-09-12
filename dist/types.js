"use strict";
// boolean (true/false)
var isOnline;
isOnline = true;
// string ('foo', "foo", `foo`)
var msg;
msg = "All ok";
// number (int, float, hex, binary)
var value;
value = 0x313;
// array (type[])
var numbers;
numbers = [12, 15, 51, 55];
var values;
values = [1, 2, 3];
// tuple
var defined;
defined = [1, "position", true];
// enum
var hexColors;
(function (hexColors) {
    hexColors["black"] = "#000";
    hexColors["white"] = "#fff";
})(hexColors || (hexColors = {}));
// any (anything) NOT RECOMMENDED
var anything;
anything = "any";
anything = [1];
anything = 10;
// void (empty)
function clg() {
    console.log('nothing');
}
// never
function error() {
    throw new Error("not implemented");
}
// object
var person;
person = {
    firstName: "Dave",
    lastName: "Grohl",
    age: 30,
};
// Type Inference
var msg2 = "Use type inference";
msg = "Use new type inference";
window.addEventListener("click", function (e) {
    console.log(e.target);
});
