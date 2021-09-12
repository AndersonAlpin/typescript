"use strict";
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.printDetails = function () {
        console.log("Name: " + this.name + " Age: " + this.age);
    };
    return User;
}());
var firstUser = new User("Anderson", 27);
firstUser.printDetails();
