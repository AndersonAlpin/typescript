"use strict";
function logDetails(id, item) {
    console.log("ID: " + id + " - Item: " + item);
}
function logInfo(id, employee) {
    console.log("ID: " + id + " - Employee: " + employee);
}
function printPlatform(platform) {
    return platform;
}
logDetails(1, 'Book');
logDetails('2', 'Pencil');
logInfo(3, 'Anderson');
logInfo('4', 'Alpin');
printPlatform('Windows');
