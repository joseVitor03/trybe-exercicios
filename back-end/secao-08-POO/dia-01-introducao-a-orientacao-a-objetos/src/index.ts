class Person {
  private name: string;
  private birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this.name = name;
    this.birthDate = birthDate;
  }

  getName() {
    return this.name;
  }

  getBirthDate() {
    return this.birthDate;
  }

  validateName(name: string) {
    if (name.length < 3) {
      return 'nome inválido';
    }
  }

  validateBirthDate(date: Date) {
    if (date.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
  }

}

const test = new Person('vitor', new Date('12/01/2003'));

console.log(test.validateBirthDate( new Date('12/01/2025')));
