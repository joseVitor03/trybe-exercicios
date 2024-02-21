class Student {
  private registration: string;
  private name: string;
  private testResults: number[] = [];
  private notesWork: number[] = [];

  constructor (registration: string, name: string) {
    this.name = name;
    this.registration = registration;
  }

  get sumNotes () {
    return this.testResults.reduce((acc, curr) => acc + curr, 0);
  }
}