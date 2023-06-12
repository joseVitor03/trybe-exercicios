// HOF SORT()
// const people = [
//     { name: 'Mateus', age: 18 },
//     { name: 'José', age: 16 },
//     { name: 'Ana', age: 23 },
//     { name: 'Cláudia', age: 20 },
//     { name: 'Bruna', age: 19 },
//   ];
  
//   // Adicione seu código aqui
//   people.sort((a, b) => a.age > b.age ? 1 : -1)
//   console.log(people);

//   const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
// inventory.sort((a, b) => a - b);
// console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// HOF MAP()

// const lista = [10,20,30,40]

// const double = () => {
//     const dobro = [];
//     lista.map((number) =>dobro.push(number * 2))
//     return dobro;
// }
// console.log(double());

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const lista = (products1, prices1) => {
//   return products1.map((lista1, index) =>({[lista1]: prices1[index]}
//    ))
// }
// console.log(lista(products, prices));




const students = [
    {
      firstName: 'João',
      lastName: 'Silva',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: 67 },
        { name: 'Português', grade: 79 },
        { name: 'Química', grade: 70 },
        { name: 'Biologia', grade: 65 },
      ],
    },
    {
      firstName: 'Mario',
      lastName: 'Ferreira',
      age: 15,
      period: 'Tarde',
      subjects: [
        { name: 'Matemática', grade: '59' },
        { name: 'Português', grade: '80' },
        { name: 'Química', grade: '78' },
        { name: 'Biologia', grade: '92' },
      ],
    },
    {
      firstName: 'Jorge',
      lastName: 'Santos',
      age: 15,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '76' },
        { name: 'Português', grade: '90' },
        { name: 'Química', grade: '70' },
        { name: 'Biologia', grade: '80' },
      ],
    },
    {
      firstName: 'Maria',
      lastName: 'Silveira',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '91' },
        { name: 'Português', grade: '85' },
        { name: 'Química', grade: '92' },
        { name: 'Biologia', grade: '90' },
      ],
    },
    {
      firstName: 'Natalia',
      lastName: 'Castro',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '70' },
        { name: 'Português', grade: '70' },
        { name: 'Química', grade: '60' },
        { name: 'Biologia', grade: '50' },
      ],
    },
    {
      firstName: 'Wilson',
      lastName: 'Martins',
      age: 14,
      period: 'Manhã',
      subjects: [
        { name: 'Matemática', grade: '80' },
        { name: 'Português', grade: '82' },
        { name: 'Química', grade: '79' },
        { name: 'Biologia', grade: '75' },
      ],
    },
  ];

  
// const fullName = () => {
//     const studentsMorning = [];
//     students.map((name) => {
//         if (name.period === 'Manhã') {
//             studentsMorning.push(`${name.firstName} ${name.lastName}`);
//         }
//     })
//     return studentsMorning;
// }
// console.log(fullName());

// const situation = (student) => {
//  const findStudents = students.find((aluno) => aluno.firstName === student);

//  return findStudents.subjects.map((subject) => 
//     `${subject.name} - ${(subject.grade >= 60) ? 'Aprovado' : 'Reprovado'}`
//   );

// }
// console.log(situation('Wilson'));