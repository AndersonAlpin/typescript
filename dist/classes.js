"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.printDetailsUser = function () {
        console.log("Name: " + this.name + " - Age: " + this.age);
    };
    return User;
}());
var UserAccount = /** @class */ (function (_super) {
    __extends(UserAccount, _super);
    function UserAccount(name, age, nickname, level) {
        var _this = _super.call(this, name, age) || this;
        _this.nickname = nickname;
        _this.level = level;
        return _this;
    }
    UserAccount.prototype.printDetailsUserAccount = function () {
        console.log("Nickname: " + this.nickname + " - Age: " + this.age + "  - Level: " + this.level);
    };
    return UserAccount;
}(User));
var firstUser = new User("Anderson", 27);
firstUser.printDetailsUser();
var secondUser = new UserAccount("Anderson", 27, "Alpin", 53);
// secondUser.name = "Bruno"
console.log(secondUser);
console.log(secondUser.age);
secondUser.printDetailsUser();
secondUser.printDetailsUserAccount();
