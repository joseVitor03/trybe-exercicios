import { validateName } from "./utils/validatePerson";

export class Person {
  constructor (private name: string, private birthDate: Date) {
    validateName(this.name);
  }

  getName () {
    return this.name;
  }

  getBirthDate () {
    return this.birthDate;
  }

}