"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var validatePerson_1 = require("./utils/validatePerson");
var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
        (0, validatePerson_1.validateName)(this.name);
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getBirthDate = function () {
        this.birthDate;
    };
    return Person;
}());
exports.Person = Person;
