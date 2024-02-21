var Person = /** @class */ (function () {
    function Person(name, birthDate) {
        this.name = name;
        this.birthDate = birthDate;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getBirthDate = function () {
        return this.birthDate;
    };
    Person.prototype.validateName = function (name) {
        if (name.length < 3) {
            return 'nome inválido';
        }
    };
    Person.prototype.validateBirthDate = function (date) {
        if (date.getTime() > new Date().getTime()) {
            throw new Error('A data de nascimento não pode ser uma data no futuro.');
        }
    };
    return Person;
}());
var test = new Person('vitor', new Date('12/01/2003'));

